export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface Education {
  institution: string;
  degree: string;
  field?: string;
  dates: string;
  gpa?: string;
  location?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  link?: string;
  dates?: string;
}

export interface Experience {
  company: string;
  position: string;
  dates: string;
  location?: string;
  responsibilities: string[];
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  projects: Project[];
  skills: string[];
  achievements: string[];
  experience: Experience[];
}

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || "";
const API_URL = "https://openrouter.ai/api/v1/chat/completions";

// In-memory storage for parsed resumes (in production, use a database)
const resumeCache = new Map<string, ResumeData>();

export async function parseResumeAsync(
  resumeText: string,
): Promise<ResumeData> {
  try {
    console.log(
      "[Parser] Starting AI parsing, text length:",
      resumeText.length,
    );

    if (!OPENROUTER_API_KEY || OPENROUTER_API_KEY === "undefined") {
      throw new Error("OPENROUTER_API_KEY is not properly configured");
    }

    const prompt = `Extract structured information from this resume and return it as a JSON object with the following structure:

{
  "personalInfo": {
    "name": "string (required)",
    "email": "string",
    "phone": "string",
    "location": "string",
    "linkedin": "string (optional)",
    "github": "string (optional)",
    "website": "string (optional)"
  },
  "education": [
    {
      "institution": "string",
      "degree": "string",
      "field": "string (optional)",
      "dates": "string",
      "gpa": "string (optional)",
      "location": "string (optional)"
    }
  ],
  "projects": [
    {
      "name": "string",
      "description": "string",
      "technologies": ["array of strings"],
      "github": "string (optional)",
      "link": "string (optional)",
      "dates": "string (optional)"
    }
  ],
  "skills": ["array of strings - technical skills, programming languages, frameworks, tools"],
  "achievements": ["array of strings - certifications, awards, competitions, honors"],
  "experience": [
    {
      "company": "string",
      "position": "string",
      "dates": "string",
      "location": "string (optional)",
      "responsibilities": ["array of strings"]
    }
  ]
}

Parse all sections carefully. If a section is not found, return an empty array or appropriate default value.
Return ONLY the JSON object, no additional text or explanations.

Resume text:
${resumeText}`;

    const requestBody = {
      model: "openai/gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      response_format: { type: "json_object" },
    };

    console.log("[Parser] Sending request to OpenRouter API...");
    console.log("[Parser] Using model:", requestBody.model);

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer":
          process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
        "X-Title": "Resume Parser",
      },
      body: JSON.stringify(requestBody),
    });

    console.log(
      "[Parser] Response status:",
      response.status,
      response.statusText,
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[Parser] API error response:", errorText);
      throw new Error(
        `OpenRouter API error: ${response.status} ${response.statusText} - ${errorText.substring(0, 200)}`,
      );
    }

    const responseText = await response.text();
    console.log("[Parser] Raw response received, length:", responseText.length);
    console.log("[Parser] Response preview:", responseText.substring(0, 200));

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error("[Parser] Failed to parse JSON response");
      console.error("[Parser] Response text:", responseText.substring(0, 500));
      throw new Error(
        "API returned invalid JSON: " + responseText.substring(0, 200),
      );
    }

    console.log("[Parser] API response received and parsed");

    if (!data.choices || !data.choices[0]?.message?.content) {
      console.error(
        "[Parser] Invalid response structure:",
        JSON.stringify(data, null, 2),
      );
      throw new Error("Invalid response structure from OpenRouter API");
    }

    const text = data.choices[0].message.content;
    console.log("[Parser] Response text length:", text.length);

    const parsedData = JSON.parse(text);

    console.log("[Parser] Successfully parsed resume");
    console.log("[Parser] Found:", {
      projects: parsedData.projects?.length || 0,
      skills: parsedData.skills?.length || 0,
      education: parsedData.education?.length || 0,
      experience: parsedData.experience?.length || 0,
    });

    return parsedData as ResumeData;
  } catch (error) {
    console.error("[Parser] Error details:", error);
    if (error instanceof Error) {
      console.error("[Parser] Error message:", error.message);
      console.error("[Parser] Error stack:", error.stack);
    }
    throw new Error(
      `Failed to parse resume: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  }
}

// POST handler for uploading and parsing resume
export async function POST(request: Request) {
  try {
    console.log("[API] POST /api/parse-resume - Request received");

    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      console.error("[API] No file provided in request");
      return Response.json(
        { success: false, error: "No file provided" },
        { status: 400 },
      );
    }

    console.log(
      "[API] File received:",
      file.name,
      "Size:",
      file.size,
      "Type:",
      file.type,
    );

    // Read PDF content
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Use pdf-parse to extract text
    const pdf = await import("pdf-parse-fork");
    const pdfData = await pdf.default(buffer);
    const resumeText = pdfData.text;

    console.log("[API] PDF text extracted, length:", resumeText.length);

    if (!resumeText || resumeText.trim().length < 50) {
      console.error("[API] Insufficient text extracted from PDF");
      return Response.json(
        {
          success: false,
          error: "Could not extract sufficient text from PDF",
          details: "The PDF appears to be empty or text extraction failed",
        },
        { status: 400 },
      );
    }

    // Parse resume using AI
    const parsedData = await parseResumeAsync(resumeText);

    // Generate unique ID for this resume
    const id = Date.now().toString();

    // Store in cache
    resumeCache.set(id, parsedData);

    console.log("[API] Resume parsed successfully, ID:", id);

    return Response.json({
      success: true,
      id,
      data: parsedData,
    });
  } catch (error) {
    console.error("[API] Error in POST handler:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to process resume",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

// GET handler for retrieving cached resume data
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return Response.json(
        { success: false, error: "No ID provided" },
        { status: 400 },
      );
    }

    const data = resumeCache.get(id);

    if (!data) {
      return Response.json(
        { success: false, error: "Resume not found" },
        { status: 404 },
      );
    }

    return Response.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("[API] Error in GET handler:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to retrieve resume",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

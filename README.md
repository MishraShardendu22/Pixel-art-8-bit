# Roles

## Shardendu Mishra (Github Username - MishraShardendu22)

- Initialised the project with NextJS 16, using biome as linter and other mordern NextJS 16 compatible techs.
- Made Portfolio Builder uisng resume parsing api and form based resume builder.
- Made components for this UI library example button, form and animation components.
- Made the shop demo that uses redux and the example web page that uses these components.
- Made parts of the Treasure hunt website that was used in IIIT Dharwad's Tech Fest and had 200 live users.(170K requests, 5k+ visits)
- Made the website SEO friendly and deployed it under my own sub-domain. (pixel-art-8-bit.mishrashardendu22.is-a.dev)
- Made the leaderboard webpage as a seperate deployment made it using Svelte and connected it with the main website using microfrontend concept.

## Anas Khan (Github Username - ANAS727189)

- Created 10 unique special components not found in any other UI library (PixelLoader, PixelTerminal, PixelGameUI, PixelWindow, PixelAudioVisualizer, PixelCodeBlock, PixelTimeline, PixelNotification, PixelChat, PixelCountdown) with 60+ interactive example pages.
- Built 10 comprehensive layout components from hero section to FAQ section (PixelHero, PixelBento, PixelFeatures, PixelCta, PixelPricing, PixelFooter, PixelTestimonials, PixelStats, PixelFaq) with multiple variants and full documentation.
- Created complete "Retro Game Central" patterns page showcasing all 10 special components in a real-world gaming platform with player dashboard, inventory system, live chat, terminal, and audio visualizer.
- Fixed critical UI issues across homepage and documentation pages, improved component responsiveness and accessibility.
- Fixed glitch text component RGB split effect rendering to properly display animations without duplicate text artifacts.
- Made parts of the Treasure hunt website that was used in IIIT Dharwad's Tech Fest and had 200 live users.(170K requests, 5k+ visits)

## Himanshu Kumar (Github Username - himanshukumar19)

- Created 4 new feedback components (PixelRating, PixelWarningTooltip, PixelUndoChip, PixelAIBubble) with interactive previews and full documentation.
- Built comprehensive Redux filtering system for Pixel Shop with real-time search, multi-select category filters, price range filtering, and 5 sort options.
- Fixed missing previews and code examples for 6 components (Drawer, AlertDialog, Toast, Sonner, Navigation Menu, Command).
- Fixed accessibility issues in shop page .

## Tanmay Gupta (Github Username -TanmayGupta-play)

- Created a new PixelTimelineNavigation component with support for both horizontal and vertical timeline layouts.
- Implemented progress tracking with completed, current, and upcoming step states, including interactive navigation between completed steps.
- Added support for multiple sizes, custom step icons, automatic timeline connectors, and responsive layouts.
- Integrated the component into the documentation system with detailed API references, usage examples, and live component previews.
- Focused on accessibility and usability through ARIA support, semantic interactions, and consistent design patterns across the Pixel UI library.

## Pixel UI — 8-Bit Retro Component Library

A complete pixel-art/8-bit retro UI component library with documentation website, built with Next.js, TypeScript, Tailwind CSS, and Radix UI primitives. Inspired by classic 8-bit games and retro computing aesthetics.

[![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?style=for-the-badge&logo=github)](https://github.com/Team-Parashuram/Pixel-art-8-bit)
[![Portfolio](https://img.shields.io/badge/Portfolio-Website-ff8c00?style=for-the-badge&logo=firefoxbrowser)](https://mishrashardendu22.is-a.dev/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077b5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/shardendumishra22/)
[![Twitter](https://img.shields.io/badge/Twitter-Follow-1da1f2?style=for-the-badge&logo=twitter)](https://x.com/Shardendu_M)

![Pixel UI](https://img.shields.io/badge/Pixel%20UI-8--bit%20Components-ff8c00?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178c6?style=for-the-badge&logo=typescript)
![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js)

## ✨ Features

- 🎮 **Retro Design** — Authentic 8-bit styling with pixel-perfect borders
- ⚡ **Instant Actions** — No smooth animations, zero transition delays  
- 📦 **10+ Components** — Buttons, Cards, Inputs, Dialogs, Toasts, and more
- ♿ **Accessible** — Built on Radix UI with ARIA attributes and keyboard support
- 🎨 **Dark/Light Mode** — Full theme support with CSS variables
- 📚 **Full Documentation** — Live previews, code examples, and props tables
- 🔧 **TypeScript** — Fully typed with excellent IDE support

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd fsd-library

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## 📁 Project Structure

```
fsd-library/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Landing page with hero & showcase
│   │   ├── globals.css                  # Tailwind + pixel theme variables
│   │   ├── layout.tsx                   # Root layout with Press Start 2P font
│   │   ├── docs/
│   │   │   └── components/[slug]/
│   │   │       └── page.tsx             # Dynamic component documentation
│   │   └── examples/
│   │       └── page.tsx                 # Full dashboard example
│   ├── components/
│   │   ├── ui/pixel/                    # All pixel UI components
│   │   │   ├── pixel-button.tsx
│   │   │   ├── pixel-card.tsx
│   │   │   ├── pixel-input.tsx
│   │   │   ├── pixel-badge.tsx
│   │   │   ├── pixel-dialog.tsx
│   │   │   ├── pixel-toast.tsx
│   │   │   ├── pixel-select.tsx
│   │   │   ├── pixel-checkbox.tsx
│   │   │   ├── pixel-tabs.tsx
│   │   │   └── pixel-accordion.tsx
│   │   └── docs/
│   │       ├── code-block.tsx           # Syntax highlighter with copy
│   │       └── sidebar.tsx              # Documentation navigation
│   └── lib/
│       └── utils.ts                     # cn() utility
├── registry/
│   └── components.json                  # Component metadata
└── public/                              # Static assets
```

## 🎨 Theme System

The pixel theme uses CSS variables for easy customization:

```css
/* Light Theme */
--color-pixel-light-bg: #f5f5dc;
--color-pixel-light-surface: #fffacd;
--color-pixel-light-primary: #ff8c00;
--color-pixel-light-secondary: #ff6b00;

/* Dark Theme */
--color-pixel-dark-bg: #000000;
--color-pixel-dark-surface: #1a1a1a;
--color-pixel-dark-primary: #ff8c00;
--color-pixel-dark-secondary: #ffd700;

/* Pixel Shadows */
--shadow-pixel: 4px 4px 0px 0px rgba(0,0,0,1);
--shadow-pixel-sm: 2px 2px 0px 0px rgba(0,0,0,1);
--shadow-pixel-lg: 6px 6px 0px 0px rgba(0,0,0,1);
```

## 🧩 Components

### Pixel Button
Interactive button with 4 variants and 3 sizes:

```tsx
import { PixelButton } from "@/components/ui/pixel/pixel-button";

<PixelButton variant="default">Click Me</PixelButton>
<PixelButton variant="secondary">Secondary</PixelButton>
<PixelButton variant="ghost">Ghost</PixelButton>
<PixelButton variant="destructive">Delete</PixelButton>
```

### Pixel Card
Container component for content:

```tsx
import { PixelCard, PixelCardHeader, PixelCardTitle, PixelCardContent } from "@/components/ui/pixel/pixel-card";

<PixelCard>
  <PixelCardHeader>
    <PixelCardTitle>Card Title</PixelCardTitle>
  </PixelCardHeader>
  <PixelCardContent>
    <p>Card content goes here</p>
  </PixelCardContent>
</PixelCard>
```

### Other Components

- **PixelInput** — Text input with pixel borders
- **PixelBadge** — Status indicators (default, success, warning, error)
- **PixelDialog** — Modal dialogs with overlay
- **PixelToast** — Notifications with positions and actions
- **PixelSelect** — Dropdown selections
- **PixelCheckbox** — Checkboxes with pixel styling
- **PixelTabs** — Tabbed navigation
- **PixelAccordion** — Collapsible sections

## 📖 Documentation

Visit `/docs/components/[component-name]` for detailed documentation on each component, including:

- Installation instructions
- Import statements
- Usage examples
- Props tables
- Live interactive previews
- Accessibility notes

Example: [http://localhost:3000/docs/components/pixel-button](http://localhost:3000/docs/components/pixel-button)

## 🎯 Example Pages

### Landing Page (`/`)

- Hero section with pixel styling
- Feature grid
- Component showcase
- Call-to-action sections

### Dashboard Example (`/examples`)
Full dashboard demonstrating:

- Stats cards with icons
- Tabs for navigation
- Profile forms with inputs
- Settings with checkboxes
- FAQ accordion
- Dialog modals
- Toast notifications

## 🛠️ Technology Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Primitives:** Radix UI
- **Icons:** Lucide React
- **Variants:** class-variance-authority
- **Syntax Highlighting:** react-syntax-highlighter
- **Font:** Press Start 2P (Google Fonts)

## 🎮 Design Philosophy

### No Smooth Animations
All components use `duration-0` and `transition-none` for instant state changes, maintaining the authentic retro feel.

### Pixel-Perfect Borders
The `.pixel-borders` utility class ensures consistent 4px solid borders with sharp edges:

```css
.pixel-borders {
  border-width: 4px;
  border-style: solid;
  border-radius: 0;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}
```

### 8px Spacing System
All spacing follows multiples of 4px (8px, 12px, 16px, etc.) for grid-aligned layouts.

## 📝 Component Standards

All components follow these standards:

- ✅ TypeScript with proper interfaces
- ✅ `forwardRef` for input-like components
- ✅ Proper ARIA attributes
- ✅ `cn()` utility for className merging
- ✅ Export both component and types
- ✅ Dark/light mode support
- ✅ `"use client"` directive where needed

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Add new pixel components
- Improve documentation
- Report bugs
- Suggest features

## 📄 License

MIT License - feel free to use this in your projects!

## 🙏 Credits

- Built by Team Parashuram
- Inspired by shadcn/ui structure
- Uses Radix UI primitives
- Font: Press Start 2P by CodeMan38

---

**Happy coding with Pixel UI! 🎮✨**

* uses `forwardRef` for input-like elements,
* uses `VariantProps` from CVA,
* includes ARIA attributes and keyboard considerations.

## Documentation site

* Landing page with hero, feature grid, component showcase.
* Per-component pages at `/docs/components/[slug]`:

  * Live interactive preview with dark/light toggle.
  * Code block with `react-syntax-highlighter` and a copy button.
  * Props table, installation, usage examples, accessibility notes.
* Sidebar with all components and active state.
* Example pages: dashboard, forms, modal demos, toasts, and gallery.

## Registry

`/registry/components.json` lists each component, source files, runtime dependencies and registry dependencies for automation and tooling.

Example entry:

```json
{
  "pixel-button": {
    "name": "Pixel Button",
    "files": ["components/ui/pixel/pixel-button.tsx"],
    "dependencies": ["class-variance-authority", "lucide-react"],
    "registryDependencies": []
  }
}
```

## Installation

```bash
# install dependencies
pnpm install
# or
npm install

# dev
pnpm dev
# or
npm run dev

# build
pnpm build
pnpm start
```

## Usage

* Import components from `components/ui/pixel`.
* Use `cn()` from `/lib/utils.ts` to merge classes.
* Docs include copy-ready installation and import snippets for each component.

## Conventions & standards

* TypeScript with strict typings.
* 8px spacing system. Sizes in multiples of 4px.
* No long-duration animations. `duration-0` or instant changes only.
* Production-ready exports and types.
* Tests and accessibility checks recommended for every component.

## Development notes

* Follow shadcn/ui component layout for file organization and docs pattern.
* Keep components small, composable, and documented.
* Use registry JSON to auto-generate docs navigation and metadata.

## Contributing

* Open PRs against `main`.
* Add component entry to `/registry/components.json`.
* Include a docs page and at least one live example.
* Follow code style and TypeScript typing rules.

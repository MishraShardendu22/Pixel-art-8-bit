"use client";

import * as React from "react";
import RotatingText from "@/components/RotatingText";

export function PixelRotatingText(props: any) {
  const texts = props.texts || props.words || ["Fast", "Simple", "Pixel"];
  return (
    <div className="pixel-animation-wrapper">
      <RotatingText texts={texts} {...props} />
    </div>
  );
}

export default PixelRotatingText;

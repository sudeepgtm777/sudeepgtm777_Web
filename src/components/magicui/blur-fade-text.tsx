"use client";

import { cn } from "@/lib/utils";
import { CSSProperties, useMemo } from "react";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  characterDelay?: number;
  delay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
}

const BlurFadeText = ({
  text,
  className,
  characterDelay = 0.03,
  delay = 0,
  duration = 0.4,
  yOffset = 8,
  animateByCharacter = false,
}: BlurFadeTextProps) => {
  const characters = useMemo(() => Array.from(text), [text]);

  if (animateByCharacter) {
    return (
      <div className="flex">
        {characters.map((char, i) => (
          <span
            key={i}
            className={cn("inline-block blur-fade-in", className)}
            style={
              {
                "--blur-fade-x": "0px",
                "--blur-fade-y": `${yOffset}px`,
                animationDelay: `${delay + i * characterDelay}s`,
                animationDuration: `${duration}s`,
                width: char.trim() === "" ? "0.2em" : "auto",
              } as CSSProperties
            }
          >
            {char}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="flex">
      <span
        className={cn("inline-block blur-fade-in", className)}
        style={
          {
            "--blur-fade-x": "0px",
            "--blur-fade-y": `${yOffset}px`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          } as CSSProperties
        }
      >
        {text}
      </span>
    </div>
  );
};

export default BlurFadeText;

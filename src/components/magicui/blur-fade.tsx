"use client";

import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  offset?: number;
  direction?: "up" | "down" | "left" | "right";
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
}

export function BlurFade({
  children,
  className,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = "down",
}: BlurFadeProps) {
  const axis =
    direction === "left" || direction === "right"
      ? { x: direction === "right" ? -offset : offset, y: 0 }
      : { x: 0, y: direction === "down" ? -offset : offset };

  return (
    <div
      className={cn("blur-fade-in", className)}
      style={
        {
          "--blur-fade-x": `${axis.x}px`,
          "--blur-fade-y": `${axis.y}px`,
          animationDelay: `${0.04 + delay}s`,
          animationDuration: `${duration}s`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

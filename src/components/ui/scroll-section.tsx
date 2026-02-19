"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale";
  id?: string;
}

export function ScrollSection({
  children,
  className,
  delay = 0,
  animation = "fade-up",
  id,
}: ScrollSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  const baseStyles = "transition-all duration-700 ease-out";

  const hiddenStyles: Record<string, string> = {
    "fade-up": "opacity-0 translate-y-8",
    "fade-in": "opacity-0",
    "fade-left": "opacity-0 translate-x-8",
    "fade-right": "opacity-0 -translate-x-8",
    "scale": "opacity-0 scale-95",
  };

  const visibleStyles: Record<string, string> = {
    "fade-up": "opacity-100 translate-y-0",
    "fade-in": "opacity-100",
    "fade-left": "opacity-100 translate-x-0",
    "fade-right": "opacity-100 translate-x-0",
    "scale": "opacity-100 scale-100",
  };

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        baseStyles,
        isVisible ? visibleStyles[animation] : hiddenStyles[animation],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
}

interface ScrollDivProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale";
  as?: "div" | "article" | "aside";
}

export function ScrollDiv({
  children,
  className,
  delay = 0,
  animation = "fade-up",
  as: Component = "div",
}: ScrollDivProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const baseStyles = "transition-all duration-700 ease-out";

  const hiddenStyles: Record<string, string> = {
    "fade-up": "opacity-0 translate-y-8",
    "fade-in": "opacity-0",
    "fade-left": "opacity-0 translate-x-8",
    "fade-right": "opacity-0 -translate-x-8",
    "scale": "opacity-0 scale-95",
  };

  const visibleStyles: Record<string, string> = {
    "fade-up": "opacity-100 translate-y-0",
    "fade-in": "opacity-100",
    "fade-left": "opacity-100 translate-x-0",
    "fade-right": "opacity-100 translate-x-0",
    "scale": "opacity-100 scale-100",
  };

  return (
    <Component
      ref={ref}
      className={cn(
        baseStyles,
        isVisible ? visibleStyles[animation] : hiddenStyles[animation],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface FloatingGlowProps {
  className?: string;
  color?: "accent" | "secondary";
  size?: "sm" | "md" | "lg";
  delay?: number;
}

export function FloatingGlow({
  className,
  color = "accent",
  size = "md",
  delay = 0,
}: FloatingGlowProps) {
  const colors = {
    accent: "bg-[var(--accent)]",
    secondary: "bg-[var(--muted)]",
  };

  const sizes = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
  };

  return (
    <motion.div
      className={cn(
        "absolute rounded-full blur-[100px] opacity-30 pointer-events-none",
        colors[color],
        sizes[size],
        className
      )}
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    />
  );
}

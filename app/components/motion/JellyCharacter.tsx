"use client";

import { motion } from "framer-motion";

interface JellyCharacterProps {
  className?: string;
}

export function JellyCharacter({ className }: JellyCharacterProps) {
  return (
    <div className={className}>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto"
      >
        {/* Glow effect - uses theme accent color */}
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          fill="url(#jellyGlow)"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main jelly body */}
        <motion.g
          animate={{
            y: [0, -8, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Body - cyan jelly shape */}
          <motion.path
            d="M100 30C55 30 40 70 40 100C40 130 55 170 100 170C145 170 160 130 160 100C160 70 145 30 100 30Z"
            fill="var(--accent)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          {/* Highlight */}
          <path
            d="M65 65C65 65 75 50 90 50C100 50 105 58 105 58"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.7"
          />

          {/* Left eye */}
          <ellipse cx="75" cy="90" rx="10" ry="14" fill="white" />
          <circle cx="75" cy="92" r="5" fill="var(--bg)" />

          {/* Right eye */}
          <ellipse cx="125" cy="90" rx="10" ry="14" fill="white" />
          <circle cx="125" cy="92" r="5" fill="var(--bg)" />

          {/* Happy mouth */}
          <path
            d="M85 115Q100 130 115 115"
            stroke="var(--bg)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Blush left - uses secondary color */}
          <ellipse cx="55" cy="110" rx="8" ry="5" fill="var(--secondary)" opacity="0.5" />

          {/* Blush right - uses secondary color */}
          <ellipse cx="145" cy="110" rx="8" ry="5" fill="var(--secondary)" opacity="0.5" />
        </motion.g>

        {/* Shadow under the character */}
        <motion.ellipse
          cx="100"
          cy="175"
          rx="35"
          ry="6"
          fill="var(--bg)"
          opacity="0.15"
          animate={{
            rx: [35, 25, 35],
            opacity: [0.15, 0.08, 0.15],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Sparkle 1 */}
        <motion.g
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <path d="M25 50L30 60L25 70L20 60L25 50Z" fill="var(--accent)" />
        </motion.g>

        {/* Sparkle 2 */}
        <motion.g
          animate={{
            rotate: [0, -360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <path d="M175 60L180 70L175 80L170 70L175 60Z" fill="var(--accent)" />
        </motion.g>

        {/* Sparkle 3 */}
        <motion.path
          d="M160 130L165 138L160 146L155 138L160 130Z"
          fill="var(--accent)"
          animate={{
            opacity: [1, 0.3, 1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Gradient definitions */}
        <defs>
          <radialGradient id="jellyGlow" cx="100" cy="100" r="80">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

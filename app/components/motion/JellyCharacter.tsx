"use client";

import { motion } from "framer-motion";

interface JellyCharacterProps {
  className?: string;
}

export function JellyCharacter({ className }: JellyCharacterProps) {
  return (
    <div className={className}>
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto"
      >
        {/* Glow effect */}
        <motion.circle
          cx="60"
          cy="60"
          r="50"
          fill="url(#jellyGlow)"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
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
            y: [0, -5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Body - cyan jelly shape */}
          <motion.path
            d="M60 20C35 20 25 45 25 65C25 85 35 100 60 100C85 100 95 85 95 65C95 45 85 20 60 20Z"
            fill="#00D9FF"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          {/* Highlight */}
          <path
            d="M40 45C40 45 45 35 55 35C60 35 65 40 65 40"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.8"
          />

          {/* Left eye */}
          <ellipse cx="45" cy="60" rx="6" ry="8" fill="white" />
          <circle cx="45" cy="62" r="3" fill="#0B0D12" />

          {/* Right eye */}
          <ellipse cx="75" cy="60" rx="6" ry="8" fill="white" />
          <circle cx="75" cy="62" r="3" fill="#0B0D12" />

          {/* Happy mouth */}
          <path
            d="M50 75Q60 85 70 75"
            stroke="#0B0D12"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />

          {/* Blush left */}
          <ellipse cx="35" cy="70" rx="5" ry="3" fill="#FF6B9D" opacity="0.5" />

          {/* Blush right */}
          <ellipse cx="85" cy="70" rx="5" ry="3" fill="#FF6B9D" opacity="0.5" />
        </motion.g>

        {/* Small bounce shadow */}
        <motion.ellipse
          cx="60"
          cy="105"
          rx="20"
          ry="4"
          fill="#0B0D12"
          opacity="0.2"
          animate={{
            rx: [20, 15, 20],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Sparkles */}
        <motion.g
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <path d="M15 30L17 35L15 40L13 35L15 30Z" fill="#00D9FF" />
        </motion.g>

        <motion.g
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <path d="M105 40L107 45L105 50L103 45L105 40Z" fill="#00D9FF" />
        </motion.g>

        <motion.path
          d="M100 70L102 73L100 76L98 73L100 70Z"
          fill="#00D9FF"
          animate={{
            opacity: [1, 0.3, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Gradient definitions */}
        <defs>
          <radialGradient id="jellyGlow" cx="60" cy="60" r="50">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00D9FF" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

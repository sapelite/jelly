"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { copy } from "../../lib/copy";

export function Hero() {
  const headlineWords = copy.hero.headline.split(" ");

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-20 py-32 relative overflow-hidden">
      {/* Animated Logo - Big and popping */}
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: -180 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: 0.1,
        }}
        className="relative mb-12"
      >
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-48 h-48 md:w-64 md:h-64"
        >
          <div className="absolute inset-0 rounded-full bg-[var(--accent)] blur-[60px] opacity-40" />
          <Image
            src="/logo.png"
            alt="JELI Logo"
            fill
            className="object-contain z-10 drop-shadow-[0_0_40px_var(--accentGlow)]"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium tracking-wider uppercase bg-[var(--surface)] border border-[var(--accent)]/30 rounded-full text-[var(--accent)]">
          <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
          {copy.hero.badge}
        </span>
      </motion.div>

      {/* Headline - MUCH BIGGER */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1] mb-8 max-w-5xl text-center">
        {headlineWords.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-[0.25em]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15 + index * 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {word}
          </motion.span>
        ))}
      </h1>

      {/* Subheadline - BIGGER */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-xl md:text-2xl lg:text-3xl text-[var(--muted)] leading-relaxed mb-12 max-w-3xl text-center"
      >
        {copy.hero.subheadline}
      </motion.p>

      {/* App Store Buttons - BIGGER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-5 justify-center"
      >
        <a
          href="#"
          className="inline-flex items-center gap-4 px-8 py-5 bg-[var(--accent)] text-[var(--bg)] font-bold text-lg rounded-2xl hover:opacity-90 transition-opacity hover:shadow-[0_0_30px_var(--accentGlow)]"
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          {copy.hero.iosButton}
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-4 px-8 py-5 bg-[var(--surface)] border-2 border-[var(--accent)]/50 text-[var(--fg)] font-bold text-lg rounded-2xl hover:border-[var(--accent)] transition-colors hover:shadow-[0_0_30px_var(--accentGlow)]"
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.36,10.72L18.27,11.93L15.39,9.05L20.36,7.28C20.68,7.4 20.89,7.69 20.89,8.03C20.89,8.39 20.72,8.73 20.36,8.94L20.36,10.72M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88Z"/>
          </svg>
          {copy.hero.androidButton}
        </a>
      </motion.div>

      {/* Gradient orbs for atmosphere */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--accent)] opacity-20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[var(--secondary)] opacity-15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--tertiary)] opacity-10 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}

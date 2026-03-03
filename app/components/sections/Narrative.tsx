"use client";

import { motion } from "framer-motion";
import { copy } from "../../lib/copy";

export function Narrative() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-transparent via-[var(--accentGlow)]/10 to-transparent">
      <div className="max-w-5xl text-center">
        {/* Title - BIGGER */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10"
        >
          {copy.narrative.title}
        </motion.h2>

        {/* Intro - BIGGER */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-[var(--muted)] leading-relaxed mb-10"
        >
          {copy.narrative.intro}
        </motion.p>

        {/* Highlight Box - BIGGER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-8 md:p-10 bg-[var(--surface)] border-2 border-[var(--accent)]/30 rounded-2xl mb-10"
        >
          <span className="text-lg font-semibold text-[var(--accent)] tracking-wide">
            {copy.narrative.highlight}
          </span>
          <p className="text-xl md:text-2xl leading-relaxed mt-4">
            {copy.narrative.highlightDescription}
          </p>
        </motion.div>

        {/* Sub Description - BIGGER */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-[var(--muted)] leading-relaxed"
        >
          {copy.narrative.subDescription}
        </motion.p>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { copy } from "../../lib/copy";

export function HowItWorks() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-transparent via-[var(--secondary)]/5 to-transparent">
      <div className="max-w-5xl text-center">
        {/* Title - BIGGER */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
        >
          {copy.standOut.title}
        </motion.h2>

        {/* Subtitle - BIGGER */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-[var(--muted)] mb-12"
        >
          {copy.standOut.subtitle}
        </motion.p>

        {/* Items - BIGGER */}
        <div className="space-y-6">
          {copy.standOut.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + index * 0.1 }}
              className="flex items-start gap-6 justify-center"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[var(--accent)] text-[var(--bg)] rounded-xl text-xl font-bold">
                {index + 1}
              </div>
              <p className="text-xl md:text-2xl text-[var(--muted)] leading-relaxed pt-2">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { copy } from "../../lib/copy";

export function Features() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl text-center">
        {/* Title - BIGGER */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10"
        >
          {copy.features.title}
        </motion.h2>

        {/* Description - BIGGER */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-[var(--muted)] leading-relaxed mb-8"
        >
          {copy.features.description}
        </motion.p>

        {/* Backend info - BIGGER */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-[var(--muted)] leading-relaxed mb-8"
        >
          {copy.features.backend}
        </motion.p>

        {/* Gestures - BIGGER */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-[var(--muted)] leading-relaxed"
        >
          {copy.features.gestures}
        </motion.p>
      </div>
    </section>
  );
}

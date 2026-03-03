"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "../ui/ThemeToggle";
import { copy } from "../../lib/copy";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav
        className={`mx-auto px-6 md:px-12 lg:px-24 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--bg)]/80 backdrop-blur-lg border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight hover:text-[var(--accent)] transition-colors"
          >
            {copy.nav.logo}
          </Link>

          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}

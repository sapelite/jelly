"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { copy } from "../../lib/copy";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [error, setError] = useState("");
  const startTime = useRef<number | null>(null);
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    setMounted(true);
    startTime.current = Date.now();
    // Check localStorage for existing success
    if (typeof window !== "undefined" && localStorage.getItem("jeli_waitlist_joined")) {
      setStatus("success");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Honeypot check
    const honeypot = (document.getElementById("website") as HTMLInputElement)?.value;
    if (honeypot) {
      setStatus("success");
      return;
    }

    // Time check - minimum 2 seconds on page
    if (!mounted || !startTime.current || Date.now() - startTime.current < 2000) {
      setError("Please wait a moment before submitting.");
      return;
    }

    // Basic email validation
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    setStatus("loading");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Store in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("jeli_waitlist_joined", "true");
      localStorage.setItem("jeli_waitlist_email", email);
    }

    setStatus("success");
  };

  if (status === "success") {
    return (
      <section className="min-h-[50vh] flex flex-col justify-center items-center py-32 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--accent)]/20 flex items-center justify-center">
            <svg className="w-10 h-10 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{copy.waitlist.success}</h3>
          <p className="text-lg text-[var(--muted)]">{copy.waitlist.disclaimer}</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-[50vh] flex flex-col justify-center items-center py-32 px-6">
      <div className="max-w-md w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          {copy.waitlist.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-[var(--muted)] mb-8"
        >
          {copy.waitlist.disclaimer}
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Honeypot field */}
          <input
            type="text"
            id="website"
            name="website"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={copy.waitlist.placeholder}
              className="flex-1 px-5 py-4 bg-[var(--surface)] border border-[var(--border)] rounded-xl text-lg focus:outline-none focus:border-[var(--accent)] transition-colors"
              required
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-8 py-4 bg-[var(--accent)] text-[var(--bg)] font-bold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {status === "loading" ? "..." : copy.waitlist.button}
            </button>
          </div>

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}
        </motion.form>

        <motion.a
          href={copy.waitlist.mailtoLink}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="inline-block mt-6 text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors underline"
        >
          {copy.waitlist.mailto}
        </motion.a>
      </div>
    </section>
  );
}

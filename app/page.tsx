"use client";

import { useRef, useState } from "react";
import { Hero } from "./components/sections/Hero";
import { Narrative } from "./components/sections/Narrative";
import { Features } from "./components/sections/Features";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Footer } from "./components/sections/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 30 });

  // Check scroll position to update button visibility
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Hero />
      
      {/* Horizontal scrolling carousel for content */}
      <div className="relative">
        {/* Progress indicator */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-[var(--accent)] z-50 origin-left"
          style={{ scaleX }}
        />
        
        {/* Horizontal scroll container */}
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ 
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {/* Narrative Section */}
          <section className="min-w-[100vw] snap-center flex-shrink-0 relative">
            <Narrative />
            {/* Left arrow */}
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-[var(--surface)] border border-[var(--border)] shadow-lg transition-all hover:border-[var(--accent)] disabled:opacity-0 hidden md:flex items-center justify-center`}
              aria-label="Previous"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            {/* Right arrow */}
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-[var(--surface)] border border-[var(--border)] shadow-lg transition-all hover:border-[var(--accent)] disabled:opacity-0 hidden md:flex items-center justify-center`}
              aria-label="Next"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </section>
          
          {/* Features Section */}
          <section className="min-w-[100vw] snap-center flex-shrink-0 relative">
            <Features />
            {/* Left arrow */}
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-[var(--surface)] border border-[var(--border)] shadow-lg transition-all hover:border-[var(--accent)] disabled:opacity-0 hidden md:flex items-center justify-center`}
              aria-label="Previous"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            {/* Right arrow */}
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-[var(--surface)] border border-[var(--border)] shadow-lg transition-all hover:border-[var(--accent)] disabled:opacity-0 hidden md:flex items-center justify-center`}
              aria-label="Next"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </section>
          
          {/* HowItWorks Section */}
          <section className="min-w-[100vw] snap-center flex-shrink-0 relative">
            <HowItWorks />
            {/* Left arrow */}
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-[var(--surface)] border border-[var(--border)] shadow-lg transition-all hover:border-[var(--accent)] disabled:opacity-0 hidden md:flex items-center justify-center`}
              aria-label="Previous"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            {/* Right arrow */}
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-[var(--surface)] border border-[var(--border)] shadow-lg transition-all hover:border-[var(--accent)] disabled:opacity-0 hidden md:flex items-center justify-center`}
              aria-label="Next"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </section>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

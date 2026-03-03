"use client";

import { Hero } from "./components/sections/Hero";
import { Narrative } from "./components/sections/Narrative";
import { Features } from "./components/sections/Features";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Waitlist } from "./components/sections/Waitlist";
import { Footer } from "./components/sections/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Narrative />
        <Features />
        <HowItWorks />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { NourAIChatbot } from "@/components/NourAIChatbot";
import { CustomCursor } from "@/components/CustomCursor";
import { PageLoadSequence } from "@/components/PageLoadSequence";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate load complete
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <PageLoadSequence onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="min-h-screen font-sans">
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <footer className="py-8 text-center border-t border-[var(--border)] text-[var(--foreground)] text-sm opacity-70">
            <p className="font-mono">© {new Date().getFullYear()} Nour Chargui — Built with Next.js & Framer Motion</p>
          </footer>
          <NourAIChatbot />
        </div>
      )}
    </>
  );
}

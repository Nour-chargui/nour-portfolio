"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id: string;
  className?: string;
  title?: string;
}

export function Section({ children, id, className, title }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 px-6 max-w-7xl mx-auto ${className || ""}`}
    >
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold cyberpunk-gradient glitch-text mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-[#8b5cf6] mx-auto md:mx-0"></div>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  );
}

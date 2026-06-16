"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadSteps = [
  { label: "SYSTEM ONLINE", delay: 0 },
  { label: "INITIALIZING PORTFOLIO", delay: 500 },
  { label: "LOADING AI MODULE", delay: 1000 },
  { label: "VERIFYING PROJECT DATABASE", delay: 1500 },
  { label: "ACCESS GRANTED", delay: 2000 },
];

export function PageLoadSequence({ onComplete }: { onComplete: () => void }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    loadSteps.forEach((step, index) => {
      setTimeout(() => {
        setActiveIndex(index);
      }, step.delay);
    });

    const totalDuration = loadSteps[loadSteps.length - 1].delay + 1500;
    setTimeout(() => {
      onComplete();
    }, totalDuration);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-[#020617] flex flex-col items-center justify-center p-4"
    >
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-4xl md:text-6xl font-bold cyberpunk-gradient glitch-text"
          >
            NOUR OS
          </motion.div>
        </div>

        <div className="space-y-6">
          {loadSteps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: activeIndex >= index ? 1 : 0.3,
                x: activeIndex >= index ? 0 : -50,
                color: activeIndex === index ? "#00ffff" : "#334155",
              }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 font-mono text-lg md:text-xl"
            >
              <span className="w-6 h-6 border border-current rounded-full flex items-center justify-center text-xs">
                {activeIndex > index ? "✓" : activeIndex === index ? "▶" : ""}
              </span>
              <span>{step.label}</span>
              {activeIndex === index && (
                <span className="loading-dots flex gap-1 ml-2">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 3, ease: "linear" }}
          className="h-1 w-full bg-gradient-to-r from-[#00ffff] via-[#8b5cf6] to-[#ec4899]"
        />
      </div>
    </motion.div>
  );
}

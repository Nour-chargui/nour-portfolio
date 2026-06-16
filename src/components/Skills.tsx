"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import resumeData from "@/data/resume.json";
import { Code, Shield, Cpu, Terminal, Layers } from "lucide-react";

const categoryIcons = {
  Programming: <Code />,
  Frontend: <Layers />,
  Backend: <Terminal />,
  Cybersecurity: <Shield />,
  "Tools & Others": <Cpu />,
};

export function Skills() {
  const { skills } = resumeData;

  return (
    <Section id="skills" title="TECHNICAL SKILLS">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="p-6 rounded-2xl glass border border-[#8b5cf6]/30 group hover:border-[#00ffff]/60 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#00ffff]/10 rounded-lg text-[#00ffff] group-hover:bg-[#00ffff]/20 transition-all">
                {categoryIcons[category as keyof typeof categoryIcons] || <Cpu />}
              </div>
              <h3 className="text-xl font-bold text-[#00ffff]">{category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, i) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[#020617] border border-[#8b5cf6]/30 rounded-full text-sm font-medium text-[#a5b4fc] hover:border-[#00ffff] hover:text-[#00ffff] transition-all cursor-default"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

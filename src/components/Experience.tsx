"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase, MapPin } from "lucide-react";
import resumeData from "@/data/resume.json";

export function Experience() {
  const { experience } = resumeData;

  return (
    <Section id="experience" title="EXPERIENCE">
      <div className="relative space-y-12">
        {/* Center Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00ffff] via-[#8b5cf6] to-[#00ffff]/20" />

        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#020617] border-4 border-[#00ffff] flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,255,255,0.6)]">
              <Briefcase size={16} className="text-[#00ffff]" />
            </div>

            {/* Card */}
            <div className={`w-full pl-14 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <div className="glass p-6 rounded-2xl border border-[#8b5cf6]/30 hover:border-[#00ffff]/60 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="font-bold text-xl text-[#e0e7ff]">{exp.company}</h4>
                  <span className="text-sm font-mono text-[#00ffff] bg-[#00ffff]/10 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-[#8b5cf6] font-semibold mb-4">{exp.role}</p>
                <div className="flex items-center gap-2 text-sm text-[#94a3b8] mb-4">
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>
                <ul className="space-y-2 text-[#94a3b8]">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-2 w-1.5 h-1.5 bg-[#00ffff] rounded-full shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

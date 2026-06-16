"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import resumeData from "@/data/resume.json";

export function About() {
  const { personal_info, education } = resumeData;

  return (
    <Section id="about" title="ABOUT ME">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-lg text-[#e0e7ff] leading-relaxed">
            I'm <span className="text-[#00ffff] font-semibold">{personal_info.name}</span>, a
            <span className="text-[#8b5cf6] font-semibold"> {personal_info.title}</span> based
            in {personal_info.location}.
          </p>
          <p className="text-lg text-[#94a3b8] leading-relaxed">
            Currently pursuing my engineering degree, I have a strong foundation in software
            engineering and a growing expertise in cybersecurity.
          </p>
          <p className="text-lg text-[#94a3b8] leading-relaxed">
            My journey in tech has been driven by a passion for solving complex problems and
            building secure, scalable solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-xl font-bold text-[#00ffff] flex items-center gap-2">
            <span className="text-[#00ffff]">&lt;</span> EDUCATION <span className="text-[#00ffff]">/&gt;</span>
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10 }}
                className="relative pl-6 border-l-2 border-[#8b5cf6]/40"
              >
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-[#00ffff] rounded-full shadow-[0_0_10px_rgba(0,255,255,0.6)]" />
                <h4 className="font-bold text-[#e0e7ff]">{edu.institution}</h4>
                <p className="text-sm text-[#00ffff] font-mono">{edu.period}</p>
                <p className="text-[#94a3b8]">{edu.degree}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

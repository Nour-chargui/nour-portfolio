"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import resumeData from "@/data/resume.json";

export function Hero() {
  const { personal_info } = resumeData;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 scanlines pointer-events-none" />
      
      {/* Animated Blobs */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-10 w-96 h-96 bg-[#00ffff]/20 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-10 w-[28rem] h-[28rem] bg-[#8b5cf6]/20 rounded-full blur-[120px]"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#a5b4fc] font-mono mb-4 tracking-widest text-sm md:text-base">
            <span className="text-[#00ffff]">&lt;</span> SYSTEM READY <span className="text-[#00ffff]">/&gt;</span>
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="cyberpunk-gradient glitch-text">{personal_info.name}</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-[#e0e7ff] mb-6 font-mono">
            {personal_info.title}
          </h2>

          <p className="text-xl text-[#a5b4fc] mb-10 max-w-2xl mx-auto leading-relaxed">
            {personal_info.skills_short}
          </p>
          <p className="text-lg text-[#94a3b8] mb-12 max-w-2xl mx-auto">
            {personal_info.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-[#00ffff] to-[#8b5cf6] text-[#020617] rounded-full font-bold flex items-center gap-2 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all hover:scale-105"
          >
            View Projects <ArrowRight size={18} />
          </a>

          <button
            onClick={() => window.dispatchEvent(new Event("openChat"))}
            className="px-8 py-3 border-2 border-[#00ffff] text-[#00ffff] rounded-full font-bold flex items-center gap-2 hover:bg-[#00ffff]/10 transition-all hover:scale-105"
          >
            <Sparkles size={18} /> Ask NOUR AI
          </button>

          <a
            href="#"
            className="px-8 py-3 border-2 border-[#8b5cf6]/50 text-[#a5b4fc] rounded-full font-bold flex items-center gap-2 hover:bg-[#8b5cf6]/10 transition-all hover:scale-105"
          >
            <Download size={18} /> Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex justify-center gap-6"
        >
          <a
            href={personal_info.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-[#8b5cf6]/30 hover:border-[#00ffff] hover:text-[#00ffff] hover:bg-[#00ffff]/5 transition-all"
          >
            <Github size={24} />
          </a>
          <a
            href={personal_info.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-[#8b5cf6]/30 hover:border-[#00ffff] hover:text-[#00ffff] hover:bg-[#00ffff]/5 transition-all"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={`mailto:${personal_info.email}`}
            className="p-3 rounded-full border border-[#8b5cf6]/30 hover:border-[#00ffff] hover:text-[#00ffff] hover:bg-[#00ffff]/5 transition-all"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

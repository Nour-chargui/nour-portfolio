"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import resumeData from "@/data/resume.json";

export function Contact() {
  const { personal_info } = resumeData;

  return (
    <Section id="contact" title="CONTACT ME">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-lg text-[#94a3b8]">
            I'm always open to discussing new projects, creative ideas, or opportunities.
            Feel free to reach out!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 glass border border-[#8b5cf6]/30 rounded-xl hover:border-[#00ffff]/60 transition-all">
              <div className="w-12 h-12 rounded-full bg-[#00ffff]/10 flex items-center justify-center text-[#00ffff]">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-[#94a3b8]">Email</p>
                <a href={`mailto:${personal_info.email}`} className="font-semibold text-[#e0e7ff] hover:text-[#00ffff] transition-colors">
                  {personal_info.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 glass border border-[#8b5cf6]/30 rounded-xl hover:border-[#00ffff]/60 transition-all">
              <div className="w-12 h-12 rounded-full bg-[#00ffff]/10 flex items-center justify-center text-[#00ffff]">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-[#94a3b8]">Phone</p>
                <p className="font-semibold text-[#e0e7ff]">{personal_info.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 glass border border-[#8b5cf6]/30 rounded-xl hover:border-[#00ffff]/60 transition-all">
              <div className="w-12 h-12 rounded-full bg-[#00ffff]/10 flex items-center justify-center text-[#00ffff]">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-[#94a3b8]">Location</p>
                <p className="font-semibold text-[#e0e7ff]">{personal_info.location}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
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
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4 p-8 glass border border-[#8b5cf6]/30 rounded-2xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-mono text-[#a5b4fc]">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-[#020617] border border-[#8b5cf6]/30 rounded-lg text-[#e0e7ff] focus:border-[#00ffff] focus:ring-1 focus:ring-[#00ffff] outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-mono text-[#a5b4fc]">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-[#020617] border border-[#8b5cf6]/30 rounded-lg text-[#e0e7ff] focus:border-[#00ffff] focus:ring-1 focus:ring-[#00ffff] outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-mono text-[#a5b4fc]">Subject</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-[#020617] border border-[#8b5cf6]/30 rounded-lg text-[#e0e7ff] focus:border-[#00ffff] focus:ring-1 focus:ring-[#00ffff] outline-none transition-all"
              placeholder="Project Inquiry"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-mono text-[#a5b4fc]">Message</label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 bg-[#020617] border border-[#8b5cf6]/30 rounded-lg text-[#e0e7ff] focus:border-[#00ffff] focus:ring-1 focus:ring-[#00ffff] outline-none transition-all resize-none"
              placeholder="Your message here..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-[#00ffff] to-[#8b5cf6] text-[#020617] rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all"
          >
            Send Message <Send size={18} />
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles, Database, Cpu, ShieldCheck, GraduationCap, Briefcase, Globe, Zap } from "lucide-react";
import resumeData from "@/data/resume.json";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "bot" | "user";
  content: string;
  isThinking?: boolean;
};

const suggestedQuestions = [
  "Who is Nour?",
  "What are Nour's technical skills?",
  "Tell me about Nour's projects.",
  "What IEEE involvement does Nour have?",
  "What is Nour's career goal?",
];

export function NourAIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "bot",
      content: "Welcome. I'm NOUR AI. Ask me anything about Nour's projects, skills, experience, and engineering journey.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener("openChat", handleOpenChat);
    return () => window.removeEventListener("openChat", handleOpenChat);
  }, []);

  const generateResponse = (query: string): string => {
    const q = query.toLowerCase();
    
    if (q.includes("who") || q.includes("about") || q.includes("nour")) {
      return `Nour CHARGUI is a ${resumeData.personal_info.title}. ${resumeData.personal_info.tagline} Nour is passionate about AI, Linux, systems, cybersecurity, and innovation!`;
    }

    if (q.includes("skill") || q.includes("tech") || q.includes("language") || q.includes("stack")) {
      const skillGroups = Object.entries(resumeData.skills)
        .map(([cat, items]) => `🔹 **${cat}**: ${items.join(", ")}`)
        .join("\n");
      return `Here are Nour's technical skills:\n${skillGroups}`;
    }

    if (q.includes("project") || q.includes("build") || q.includes("develop")) {
      const projectList = resumeData.projects
        .slice(0, 3)
        .map((p) => `🚀 **${p.title}** (${p.date})\n${p.description}`)
        .join("\n\n");
      return `Here are Nour's key projects:\n\n${projectList}`;
    }

    if (q.includes("experience") || q.includes("work") || q.includes("internship") || q.includes("job")) {
      const expList = resumeData.experience
        .map((e) => `💼 **${e.company}** (${e.period})\n${e.role}`)
        .join("\n\n");
      return `Here's Nour's professional experience:\n\n${expList}`;
    }

    if (q.includes("education") || q.includes("study") || q.includes("university") || q.includes("school") || q.includes("degree")) {
      const eduList = resumeData.education
        .map((e) => `🎓 **${e.institution}** (${e.period})\n${e.degree}`)
        .join("\n\n");
      return `Here's Nour's educational background:\n\n${eduList}`;
    }

    if (q.includes("ieee")) {
      const invList = resumeData.involvement
        .map((i) => `⚡ **${i.role}** @ ${i.organization}\n${i.period}`)
        .join("\n\n");
      return `Here's Nour's IEEE involvement:\n\n${invList}`;
    }

    if (q.includes("certification") || q.includes("pcap") || q.includes("python")) {
      const certList = resumeData.certifications
        .map((c) => `🏆 **${c.name}** (${c.date})`)
        .join("\n");
      return `Here are Nour's certifications:\n${certList}`;
    }

    if (q.includes("career") || q.includes("goal") || q.includes("future")) {
      return "Nour's career goal is to become a leading Cybersecurity Engineer, building secure, AI-driven systems that protect digital infrastructure while driving innovation in the field!";
    }

    if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("linkedin")) {
      return `You can reach Nour via:\n📧 Email: ${resumeData.personal_info.email}\n🔗 LinkedIn: ${resumeData.personal_info.linkedin}\n🐙 GitHub: ${resumeData.personal_info.github}`;
    }

    return "I'm not sure I understand. Try asking about Nour's skills, projects, experience, education, IEEE involvement, certifications, or career goals!";
  };

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Thinking simulation
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content: generateResponse(text),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1200 + Math.random() * 800);
  };

  return (
    <>
      {/* Floating Orb Button */}
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[100]"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[#00ffff] blur-xl opacity-60 animate-pulse" />
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#00ffff] to-[#8b5cf6] flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.5)]">
            <Sparkles size={28} className="text-[#020617]" />
          </div>
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className="fixed bottom-32 right-8 z-[99] w-full max-w-[420px] md:w-[420px] h-[600px] glass rounded-2xl overflow-hidden flex flex-col cyberpunk-border"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-[#00ffff]/20 via-[#8b5cf6]/20 to-[#ec4899]/20 border-b border-[#8b5cf6]/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00ffff]/20 border border-[#00ffff] flex items-center justify-center animate-pulse">
                  <Cpu size={20} className="text-[#00ffff]" />
                </div>
                <div>
                  <p className="font-bold text-[#00ffff] text-lg">NOUR AI</p>
                  <p className="text-xs text-[#a5b4fc]">Online • Active</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#a5b4fc] hover:text-[#00ffff] transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-grow p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-transparent to-[#020617]/50"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn("flex items-start gap-3", msg.role === "user" ? "flex-row-reverse" : "flex-row")}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                    msg.role === "bot" ? "bg-[#00ffff]/20 border border-[#00ffff]" : "bg-[#8b5cf6]/20 border border-[#8b5cf6]"
                  )}>
                    {msg.role === "bot" ? <Bot size={16} className="text-[#00ffff]" /> : <User size={16} className="text-[#8b5cf6]" />}
                  </div>
                  <div
                    className={cn(
                      "max-w-[80%] p-3 rounded-xl text-sm whitespace-pre-wrap",
                      msg.role === "bot"
                        ? "bg-[#020617]/70 border border-[#8b5cf6]/30 rounded-bl-none text-[#e0e7ff]"
                        : "bg-[#00ffff]/10 border border-[#00ffff]/40 rounded-br-none text-[#00ffff]"
                    )}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#00ffff]/20 border border-[#00ffff] flex items-center justify-center">
                    <Bot size={16} className="text-[#00ffff]" />
                  </div>
                  <div className="bg-[#020617]/70 border border-[#8b5cf6]/30 p-3 rounded-xl rounded-bl-none flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#00ffff] animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 rounded-full bg-[#00ffff] animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 rounded-full bg-[#00ffff] animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              {messages.length === 1 && (
                <div className="grid grid-cols-1 gap-2 mt-4">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="text-left text-sm text-[#a5b4fc] hover:text-[#00ffff] hover:bg-[#00ffff]/10 p-2 rounded-lg border border-[#8b5cf6]/20 transition-all"
                    >
                      • {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#020617]/80 border-t border-[#8b5cf6]/30">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
                  placeholder="Ask NOUR AI something..."
                  className="flex-grow bg-[#020617] border border-[#8b5cf6]/30 rounded-lg px-4 py-3 text-[#e0e7ff] placeholder:text-[#475569] focus:outline-none focus:border-[#00ffff] focus:ring-1 focus:ring-[#00ffff]/30 transition-all"
                />
                <button
                  onClick={() => handleSend(input)}
                  className="w-12 h-12 bg-gradient-to-r from-[#00ffff] to-[#8b5cf6] rounded-lg flex items-center justify-center text-[#020617] font-bold hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

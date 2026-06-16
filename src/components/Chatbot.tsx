"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";
import resumeData from "@/data/resume.json";
import { cn } from "@/lib/utils";

type Message = {
  role: "bot" | "user";
  content: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "Hi! I'm Nour's AI assistant. Ask me anything about her skills, projects, or experience!",
    },
  ]);
  const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener("openChat", handleOpenChat);
    return () => window.removeEventListener("openChat", handleOpenChat);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setInput("");
    setIsTyping(true);

    // Simulate thinking
    setTimeout(() => {
      const botResponse = generateResponse(userMsg);
      setMessages((prev) => [...prev, { role: "bot", content: botResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  const generateResponse = (query: string): string => {
    const q = query.toLowerCase();
    
    if (q.includes("skill") || q.includes("tech") || q.includes("language") || q.includes("stack")) {
      const skillGroups = Object.entries(resumeData.skills)
        .map(([cat, items]) => `• ${cat}: ${items.join(", ")}`)
        .join("\n");
      return `Nour has a diverse technical stack:\n${skillGroups}`;
    }

    if (q.includes("project") || q.includes("build") || q.includes("develop")) {
      const projectList = resumeData.projects
        .slice(0, 3)
        .map((p) => `• ${p.title}: ${p.description}`)
        .join("\n\n");
      return `Nour has worked on several impressive projects, including:\n\n${projectList}\n\nWould you like to hear about a specific one?`;
    }

    if (q.includes("experience") || q.includes("work") || q.includes("internship") || q.includes("job")) {
      const expList = resumeData.experience
        .map((e) => `• ${e.company} (${e.period}): ${e.role}`)
        .join("\n");
      return `Nour's professional experience includes:\n${expList}`;
    }

    if (q.includes("education") || q.includes("study") || q.includes("university") || q.includes("school") || q.includes("degree")) {
      const eduList = resumeData.education
        .map((e) => `• ${e.degree} at ${e.institution} (${e.period})`)
        .join("\n");
      return `Nour is currently a Cybersecurity Engineering Student. Her educational background:\n${eduList}`;
    }

    if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("linkedin")) {
      return `You can reach Nour at ${resumeData.personal_info.email} or connect with her on LinkedIn: ${resumeData.personal_info.linkedin}`;
    }

    if (q.includes("who") || q.includes("about") || q.includes("tell me")) {
      return `Nour CHARGUI is a ${resumeData.personal_info.title}. ${resumeData.personal_info.tagline}`;
    }

    if (q.includes("certification") || q.includes("pcap") || q.includes("python")) {
      const certs = resumeData.certifications.map(c => `• ${c.name} (${c.date})`).join("\n");
      return `Nour holds the following certifications:\n${certs}`;
    }

    return "I'm not sure I understand. I can tell you about Nour's skills, projects, experience, education, or how to contact her. Try asking 'What are your skills?' or 'Tell me about your projects'.";
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center z-[100]"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[350px] md:w-[400px] h-[500px] bg-card border border-border rounded-2xl shadow-2xl z-[100] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-primary text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot size={20} />
                <span className="font-bold">Nour's Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-grow p-4 overflow-y-auto space-y-4 bg-secondary/10"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === "bot" ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={cn(
                    "flex items-start gap-2",
                    msg.role === "user" ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                    msg.role === "bot" ? "bg-primary/20 text-primary" : "bg-secondary text-foreground/50"
                  )}>
                    {msg.role === "bot" ? <Bot size={16} /> : <User size={16} />}
                  </div>
                  <div
                    className={cn(
                      "p-3 rounded-2xl text-sm max-w-[80%] whitespace-pre-wrap",
                      msg.role === "bot"
                        ? "bg-card border border-border rounded-tl-none"
                        : "bg-primary text-white rounded-tr-none"
                    )}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                    <Bot size={16} />
                  </div>
                  <div className="bg-card border border-border p-3 rounded-2xl rounded-tl-none">
                    <Loader2 size={16} className="animate-spin" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-card">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-grow bg-secondary/50 border border-border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  onClick={handleSend}
                  className="p-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
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

"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { ExternalLink, Github, Code2 } from "lucide-react";
import resumeData from "@/data/resume.json";
import { useState } from "react";

// Fallback images
const FALLBACK_IMAGES: Record<number, string> = {
  1: "https://images.unsplash.com/photo-1550745165-9bc0b25272be?q=80&w=2070&auto=format&fit=crop",
  2: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
  3: "https://images.unsplash.com/photo-1523853138873-e14b1e470517?w=800&h=600&fit=crop",
  4: "https://images.unsplash.com/photo-1629654297299-c85062213b94749775894758947589?w=800&h=600&fit=crop",
  5: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  6: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d?w=800&h=600&fit=crop",
};

export function Projects() {
  const { projects } = resumeData;
  const featuredProject = projects.find(p => p.isFeatured);
  const otherProjects = projects.filter(p => !p.isFeatured);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const getImageSrc = (project: typeof projects[0]) => {
    if (imageErrors[project.id]) {
      return FALLBACK_IMAGES[project.id];
    }
    return project.image;
  };

  return (
    <Section id="projects" title="PROJECTS">
      {/* Featured Project */}
      {featuredProject && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-1 rounded-3xl bg-gradient-to-br from-[#00ffff]/30 via-[#8b5cf6]/30 to-[#ec4899]/30"
        >
          <div className="glass rounded-[22px] p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <p className="text-[#00ffff] font-mono tracking-widest text-sm uppercase">Featured Project</p>
                <h3 className="text-4xl font-bold cyberpunk-gradient">{featuredProject.title}</h3>
                <p className="text-lg text-[#94a3b8] leading-relaxed">{featuredProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#00ffff]/10 border border-[#00ffff]/40 rounded-full text-xs font-mono text-[#00ffff]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#00ffff] to-[#8b5cf6] text-[#020617] rounded-full font-bold hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href={featuredProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2 border border-[#8b5cf6] rounded-full font-medium text-[#a5b4fc] hover:bg-[#8b5cf6]/10 transition-all"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="cyber-image-container rounded-2xl group shadow-[0_0_30px_rgba(139,92,246,0.2)]"
              >
                <img
                  src={getImageSrc(featuredProject)}
                  alt={featuredProject.title}
                  onError={() => handleImageError(featuredProject.id)}
                  className="w-full h-auto object-cover cyber-image"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      {/* All Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative glass border border-[#8b5cf6]/30 rounded-2xl overflow-hidden hover:border-[#00ffff]/60 transition-all"
          >
            <div className="cyber-image-container h-48">
              <img
                src={getImageSrc(project)}
                alt={project.title}
                onError={() => handleImageError(project.id)}
                className="w-full h-full object-cover cyber-image"
              />
            </div>
            <div className="p-6 flex flex-col">
              <p className="text-xs text-[#a5b4fc] font-mono mb-1">{project.category}</p>
              <h3 className="text-xl font-bold text-[#e0e7ff] mb-3 group-hover:text-[#00ffff] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-[#94a3b8] mb-4 flex-grow line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.slice(0, 4).map(tech => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-[#020617] border border-[#8b5cf6]/30 rounded text-xs font-mono text-[#a5b4fc]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#a5b4fc] hover:text-[#00ffff] transition-colors"
                >
                  <Github size={18} />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#a5b4fc] hover:text-[#00ffff] transition-colors"
                >
                  <ExternalLink size={18} />
                  <span className="text-sm">Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

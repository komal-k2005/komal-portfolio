import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, Sparkles } from "lucide-react";
import { GitHubIcon } from "./SocialIcons";
import { projects } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

const CATEGORIES = ["All", "AI & Java / Spring", "Full-Stack & Web"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "AI & Java / Spring") {
      return (
        project.tech.includes("Java") ||
        project.tech.includes("Spring Boot") ||
        project.tech.includes("Spring AI") ||
        project.tech.includes("AI")
      );
    }
    if (activeCategory === "Full-Stack & Web") {
      return (
        project.tech.includes("React") ||
        project.tech.includes("PHP") ||
        project.tech.includes("JavaScript") ||
        project.tech.includes("HTML5")
      );
    }
    return true;
  });

  return (
    <section id="projects" className="section-padding bg-surface-2/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="Portfolio"
          title="Featured Projects"
          subtitle="Full-stack systems, Spring Boot backends, and AI applications."
        />

        {/* Animated Filter Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-1.5 p-1.5 rounded-full glass border border-white/10 shadow-lg backdrop-blur-md">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectFilter"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 shadow-md shadow-purple-500/25"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {cat === "AI & Java / Spring" && <Sparkles size={12} className="text-amber-300" />}
                    {cat}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`glass glass-hover rounded-2xl p-6 flex flex-col transition-all duration-300 group ${
                  project.featured ? "md:col-span-1 ring-1 ring-purple-500/20" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg font-bold text-white leading-snug group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-1.5 shrink-0">
                    {project.featured && (
                      <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        <Star size={10} /> Featured
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs font-mono text-slate-500 mb-3">{project.period}</p>
                <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs rounded-md bg-white/5 text-slate-400 border border-white/5 group-hover:border-purple-500/20 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/5">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <GitHubIcon size={14} /> Code
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/20 transition-all shadow-sm"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </motion.a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Repositories Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://github.com/komal-k2005?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass glass-hover text-sm font-medium text-slate-300 hover:text-white transition-all shadow-md border border-white/10"
          >
            <GitHubIcon size={18} />
            View All 15+ Repositories on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

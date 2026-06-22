import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { GitHubIcon } from "./SocialIcons";
import { projects } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-surface-2/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="Portfolio"
          title="Featured Projects"
          subtitle="Academic and freelance work — all built by Komal Kathwade."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08 }}
              className={`glass glass-hover rounded-2xl p-6 flex flex-col transition-all duration-300 ${
                project.featured ? "md:col-span-1 ring-1 ring-purple-500/20" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-lg font-bold text-white leading-snug">
                  {project.title}
                </h3>
                <div className="flex gap-1.5 shrink-0">
                  {project.featured && (
                    <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Star size={10} /> Featured
                    </span>
                  )}
                  {project.freelance && (
                    <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Client
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
                    className="px-2 py-0.5 text-xs rounded-md bg-white/5 text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-5 pt-4 border-t border-white/5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <GitHubIcon size={16} /> Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/komal-k2005?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass glass-hover text-sm font-medium text-slate-300 hover:text-white transition-all"
          >
            <GitHubIcon size={18} />
            View All 14+ Repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

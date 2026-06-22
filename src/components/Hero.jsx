import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon, UpworkIcon } from "./SocialIcons";
import { profile } from "../data/portfolio";
import TypingRoles from "./ui";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-28">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-sm text-purple-400 mb-3"
          >
            Hello, I'm
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="gradient-text">{profile.name}</span>
          </h1>

          <div className="mt-4 h-8 text-lg md:text-xl">
            <TypingRoles roles={profile.roles} />
          </div>

          <p className="mt-6 text-slate-400 text-lg max-w-lg leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-400">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Mail size={14} /> {profile.email}
            </a>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> {profile.location}
            </span>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <LinkedInIcon size={14} /> LinkedIn
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full glass glass-hover text-white font-semibold transition-all hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass glass-hover text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass glass-hover text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              href={profile.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass glass-hover text-slate-400 hover:text-emerald-400 transition-colors"
              aria-label="Upwork"
            >
              <UpworkIcon size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2.5 rounded-xl glass glass-hover text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/40 to-cyan-500/40 blur-2xl scale-110" />
            <div className="relative float">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/10 shadow-2xl shadow-purple-500/20"
              />
              <div className="absolute -bottom-2 -right-2 px-4 py-2 rounded-2xl glass text-sm font-mono text-emerald-400 border border-emerald-500/30">
                {profile.openToWork ? "Open to Work" : "Available for Freelance"}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-purple-400 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </motion.a>
    </section>
  );
}

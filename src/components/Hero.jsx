import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin, Sparkles } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
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
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-purple-500/30 text-purple-400 text-xs font-mono mb-4"
          >
            <Sparkles size={14} className="text-amber-400" />
            <span>Hello, I am</span>
          </motion.div>

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
            <span className="text-slate-500">|</span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> {profile.location}
            </span>
            <span className="text-slate-500 hidden sm:inline">|</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <LinkedInIcon size={14} /> LinkedIn
            </a>
          </div>

          {/* Interactive Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white text-sm font-semibold shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 transition-all btn-primary"
            >
              View Projects
            </motion.a>

            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3.5 rounded-full glass glass-hover text-slate-200 text-sm font-semibold border border-white/10 transition-all"
            >
              Experience
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3.5 rounded-full glass glass-hover text-cyan-400 text-sm font-semibold border border-cyan-500/20 hover:border-cyan-500/40 transition-all"
            >
              Get In Touch
            </motion.a>
          </div>

          {/* Social Links with Micro-Interactions */}
          <div className="mt-8 flex gap-3">
            {[
              {
                icon: GitHubIcon,
                href: profile.github,
                label: "GitHub",
                color: "hover:text-purple-400 hover:border-purple-500/40",
              },
              {
                icon: LinkedInIcon,
                href: profile.linkedin,
                label: "LinkedIn",
                color: "hover:text-cyan-400 hover:border-cyan-500/40",
              },
              {
                icon: Mail,
                href: `mailto:${profile.email}`,
                label: "Email",
                color: "hover:text-pink-400 hover:border-pink-500/40",
              },
            ].map((soc) => {
              const Icon = soc.icon;
              return (
                <motion.a
                  key={soc.label}
                  href={soc.href}
                  target={soc.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-2xl glass border border-white/10 text-slate-400 transition-colors shadow-sm ${soc.color}`}
                  aria-label={soc.label}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Profile Avatar Card with Floating Tech Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Rotating Ambient Halo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500/30 via-cyan-400/20 to-pink-500/30 blur-2xl pointer-events-none"
            />

            {/* Floating Tech Pill 1: Java & Spring */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
              transition={{ opacity: { delay: 0.4 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
              className="hidden sm:flex absolute -left-10 top-6 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-purple-500/30 shadow-lg backdrop-blur-md text-xs font-mono text-purple-300"
            >
              <span>☕</span>
              <span>Java • Spring Boot</span>
            </motion.div>

            {/* Floating Tech Pill 2: Spring AI */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
              transition={{ opacity: { delay: 0.5 }, y: { duration: 4.8, repeat: Infinity, ease: "easeInOut" } }}
              className="hidden sm:flex absolute -left-8 bottom-12 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-cyan-500/30 shadow-lg backdrop-blur-md text-xs font-mono text-cyan-300"
            >
              <span>🤖</span>
              <span>Spring AI • OpenAI</span>
            </motion.div>

            {/* Floating Tech Pill 3: React & REST APIs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, y: [0, -7, 0] }}
              transition={{ opacity: { delay: 0.6 }, y: { duration: 4.2, repeat: Infinity, ease: "easeInOut" } }}
              className="hidden sm:flex absolute -right-6 top-14 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-pink-500/30 shadow-lg backdrop-blur-md text-xs font-mono text-pink-300"
            >
              <span>⚛️</span>
              <span>React • REST APIs</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
              className="relative z-10"
            >
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/10 shadow-2xl shadow-purple-500/20"
              />
              <div className="absolute -bottom-2 -right-2 px-4 py-2 rounded-2xl glass text-xs font-mono font-medium text-emerald-400 border border-emerald-500/30 flex items-center gap-2 shadow-lg backdrop-blur-md z-20">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span>Open to Work</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: [0.5, 1, 0.5], y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        whileHover={{ scale: 1.15 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 hover:text-cyan-400 transition-colors flex flex-col items-center gap-1"
        aria-label="Scroll down to explore"
      >
        <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500">Scroll</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}

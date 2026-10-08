import { motion } from "framer-motion";

export default function SectionTitle({ label, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mb-12 md:mb-16 text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-purple-500/30 text-purple-400 text-xs font-mono tracking-widest uppercase mb-3 shadow-sm"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span>{label}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.45 }}
        className="text-3xl md:text-4xl font-extrabold text-white tracking-tight"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.45 }}
          className="mt-3 max-w-2xl mx-auto text-slate-400 text-sm md:text-base leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Subtle glowing center divider line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
      />
    </motion.div>
  );
}

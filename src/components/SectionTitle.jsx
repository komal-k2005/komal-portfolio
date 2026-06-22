import { motion } from "framer-motion";

export default function SectionTitle({ label, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 md:mb-16 text-center"
    >
      <span className="font-mono text-sm tracking-widest uppercase text-purple-400">
        {label}
      </span>
      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">{title}</h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl mx-auto text-slate-400">{subtitle}</p>
      )}
    </motion.div>
  );
}

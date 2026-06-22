import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface-2/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="Skills"
          title="Technical Expertise"
          subtitle="Programming, backend, frontend, databases, testing, and professional soft skills."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.06 }}
              className="glass glass-hover rounded-2xl p-6 transition-all duration-300 group"
            >
              <div
                className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold text-white bg-gradient-to-r ${group.color} mb-4`}
              >
                {group.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-slate-300 border border-white/5 group-hover:border-purple-500/20 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

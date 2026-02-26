import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'Python', level: 85, color: '#6366f1' },
  { name: 'Java', level: 82, color: '#8b5cf6' },
  { name: 'JavaScript', level: 80, color: '#a78bfa' },
  { name: 'React', level: 78, color: '#6366f1' },
  { name: 'Tailwind CSS', level: 85, color: '#8b5cf6' },
  { name: 'MySQL', level: 75, color: '#a78bfa' },
  { name: 'Git / GitHub', level: 88, color: '#6366f1' },
  { name: 'Data Structures & Algorithms', level: 80, color: '#8b5cf6' },
]

function SkillBar({ skill, index, isInView }: { skill: (typeof skills)[0]; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="text-slate-300 font-medium">{skill.name}</span>
        <span className="text-indigo-400 text-sm font-mono">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.1 + 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
            boxShadow: `0 0 20px ${skill.color}40`,
          }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-slate-100">My </span>
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-12 rounded-3xl"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} isInView={isInView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

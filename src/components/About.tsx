import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

export default function About() {
  const { about } = portfolioData
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card p-8 md:p-12 rounded-3xl"
        >
          <div className="flex flex-col lg:flex-row gap-12 items-start mt-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0 w-full lg:w-1/3"
            >
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-600/20 border border-white/10 flex items-center justify-center overflow-hidden">
                <span className="text-8xl">👩‍💻</span>
              </div>
            </motion.div>

            <div className="flex-1 space-y-8">
              <div>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold mb-6"
                >
                  <span className="text-slate-100">{about.title}</span>
                  <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                    {about.highlight}
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-slate-400 text-lg leading-relaxed"
                >
                  {about.description}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-slate-100 mb-4 border-b border-white/10 pb-2">Experience</h3>
                {about.experience.map((exp, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 mb-4">
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h4 className="text-xl font-semibold text-indigo-400">{exp.title}</h4>
                      <span className="text-slate-400 text-sm md:text-base bg-indigo-500/10 px-3 py-1 rounded-full w-fit">{exp.period}</span>
                    </div>
                    <div className="text-slate-300 font-medium mb-4">{exp.company}</div>
                    <ul className="list-disc list-inside text-slate-400 space-y-2 text-sm md:text-base">
                      {exp.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-slate-100 mb-4 border-b border-white/10 pb-2">Education</h3>
                <div className="space-y-4">
                  {about.education.map((edu, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="flex flex-col md:flex-row justify-between mb-2">
                        <h4 className="text-xl font-semibold text-indigo-400">{edu.degree}</h4>
                        <span className="text-slate-400 text-sm md:text-base bg-indigo-500/10 px-3 py-1 rounded-full w-fit">{edu.period}</span>
                      </div>
                      <div className="text-slate-300 font-medium mb-1">{edu.institution}</div>
                      <div className="text-fuchsia-400/80 font-medium text-sm">{edu.score}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

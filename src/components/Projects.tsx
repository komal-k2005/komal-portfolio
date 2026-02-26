import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Data Science Projects',
    description: 'Exploratory data analysis, visualization, and insights extraction from diverse datasets.',
    tags: ['Python', 'Pandas', 'Matplotlib'],
    link: 'https://github.com/komal-k2005',
    gradient: 'from-indigo-500/20 to-violet-600/20',
    icon: '📊',
  },
  {
    title: 'Machine Learning Models',
    description: 'Building and training ML models for classification, regression, and predictive analytics.',
    tags: ['Python', 'scikit-learn', 'ML'],
    link: 'https://github.com/komal-k2005',
    gradient: 'from-violet-500/20 to-fuchsia-600/20',
    icon: '🤖',
  },
  {
    title: 'Java Backend Applications',
    description: 'Scalable backend systems and APIs built with Java for robust enterprise solutions.',
    tags: ['Java', 'Spring', 'MySQL'],
    link: 'https://github.com/komal-k2005',
    gradient: 'from-fuchsia-500/20 to-indigo-600/20',
    icon: '☕',
  },
  {
    title: 'Full-Stack Web Apps',
    description: 'Modern web applications with React, Tailwind, and responsive UI design.',
    tags: ['React', 'Tailwind', 'PHP'],
    link: 'https://github.com/komal-k2005',
    gradient: 'from-indigo-500/20 to-fuchsia-600/20',
    icon: '🌐',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
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
              Projects
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            A selection of projects I've worked on
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group block"
              data-cursor-hover
            >
              <div className="glass-card p-6 md:p-8 rounded-2xl h-full border border-white/5 hover:border-indigo-500/30 transition-all duration-300 overflow-hidden">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 mb-6 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-white/5 text-slate-400 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center text-indigo-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View Project
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

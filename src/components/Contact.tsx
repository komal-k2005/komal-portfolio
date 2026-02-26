import { useState } from 'react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formState)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const inputProps = (name: string) => ({
    name,
    onFocus: () => setFocused(name),
    onBlur: () => setFocused(null),
    onChange: handleChange,
    value: formState[name as keyof typeof formState],
    className: `w-full px-4 py-3 rounded-xl bg-white/5 border transition-all duration-300 outline-none ${
      focused === name
        ? 'border-indigo-500/50 shadow-lg shadow-indigo-500/10'
        : 'border-white/10 hover:border-white/20'
    } text-slate-100 placeholder-slate-500`,
  })

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-slate-100">Get in </span>
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Have a project in mind? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-12 rounded-3xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="name" className="block text-slate-400 text-sm mb-2">
                Name
              </label>
              <input
                {...inputProps('name')}
                id="name"
                type="text"
                placeholder="Your name"
                required
                data-cursor-hover
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="email" className="block text-slate-400 text-sm mb-2">
                Email
              </label>
              <input
                {...inputProps('email')}
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                data-cursor-hover
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="message" className="block text-slate-400 text-sm mb-2">
                Message
              </label>
              <textarea
                {...inputProps('message')}
                id="message"
                rows={5}
                placeholder="Your message..."
                required
                data-cursor-hover
                className="resize-none"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-shadow duration-300"
                data-cursor-hover
              >
                Send Message
              </motion.button>
            </motion.div>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8"
          >
            <a
              href="mailto:hellokomalk@gmail.com"
              className="text-slate-400 hover:text-indigo-400 transition-colors"
              data-cursor-hover
            >
              hellokomalk@gmail.com
            </a>
            <a
              href="https://github.com/komal-k2005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition-colors"
              data-cursor-hover
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/komal-kathawade/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition-colors"
              data-cursor-hover
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

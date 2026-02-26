import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import CustomCursor from './components/CustomCursor'
import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [cursorEnabled, setCursorEnabled] = useState(false)

  useEffect(() => {
    const isDesktop = window.matchMedia('(pointer: fine)').matches
    setCursorEnabled(isDesktop)
    if (isDesktop) {
      document.body.classList.add('custom-cursor')
    }
    return () => document.body.classList.remove('custom-cursor')
  }, [])

  return (
    <>
      <ParticleBackground />
      {cursorEnabled && <CustomCursor />}
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </AnimatePresence>
      </main>
    </>
  )
}

export default App

import { useEffect, useRef, useState } from 'react'
import TypingAnimation from './TypingAnimation'
import { portfolioData } from '../data/portfolio'

export default function Hero() {
  const { hero } = portfolioData
  const { roles } = hero

  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="vh-100 d-flex align-items-center justify-content-center px-4 position-relative overflow-hidden"
    >
      <div className="position-absolute w-100 h-100 pe-none" style={{ background: 'linear-gradient(to bottom, rgba(99, 102, 241, 0.05), transparent)' }} />

      <div className="container text-center position-relative z-1" style={{ maxWidth: '800px' }}>
        <div
          className={`mb-4 fade-up ${isVisible ? 'in-view' : ''}`}
        >
          <span className="d-inline-block px-3 py-2 rounded-pill border small" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', color: '#94a3b8', backdropFilter: 'blur(4px)' }}>
            Welcome to my portfolio
          </span>
        </div>

        <h1
          className={`display-3 fw-bold mb-4 fade-up delay-100 ${isVisible ? 'in-view' : ''}`}
        >
          <span className="text-light">{hero.greeting}</span>
          <span className="text-gradient fw-bold">
            {hero.name}
          </span>
        </h1>

        <div
          className={`h3 mb-5 fade-up delay-200 ${isVisible ? 'in-view' : ''}`}
          style={{ color: '#94a3b8', minHeight: '2em' }}
        >
          <TypingAnimation words={roles} className="fw-medium text-primary" />
        </div>

        <p
          className={`lead mx-auto mb-5 fade-up delay-300 ${isVisible ? 'in-view' : ''}`}
          style={{ color: '#64748b', maxWidth: '600px' }}
        >
          {hero.description}
        </p>

        <div
          className={`d-flex flex-wrap justify-content-center gap-3 fade-up delay-400 ${isVisible ? 'in-view' : ''}`}
        >
          <a
            href="#projects"
            className="btn btn-primary btn-lg rounded-pill px-5 py-3 hover-scale border-0 shadow-lg"
            style={{ background: 'linear-gradient(to right, #6366f1, #8b5cf6)', color: 'white' }}
            data-cursor-hover
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="btn btn-outline-light btn-lg rounded-pill px-5 py-3 hover-scale"
            style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(4px)', borderColor: 'rgba(255,255,255,0.1)' }}
            data-cursor-hover
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div
        className={`position-absolute bottom-0 start-50 translate-middle-x mb-5 fade-up delay-500 ${isVisible ? 'in-view' : ''}`}
      >
        <a
          href="#about"
          className="d-flex flex-column align-items-center gap-2 text-decoration-none animate-bounce-soft"
          style={{ color: '#64748b' }}
          data-cursor-hover
        >
          <span className="small">Scroll</span>
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}

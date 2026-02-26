import { useEffect, useRef, useState } from 'react'
import { portfolioData } from '../data/portfolio'

export default function Projects() {
  const { projects } = portfolioData
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

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

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-5 px-4" ref={ref}>
      <div className="container" style={{ maxWidth: '1152px' }}>
        <div
          className={`text-center mb-5 fade-up ${isVisible ? 'in-view' : ''}`}
        >
          <h2 className="display-5 fw-bold mb-3">
            <span className="text-light">{projects.title}</span>
            <span className="text-gradient">
              {projects.highlight}
            </span>
          </h2>
          <p className="lead mx-auto" style={{ color: '#64748b', maxWidth: '600px' }}>
            {projects.description}
          </p>
        </div>

        <div className="row g-4 lg-g-5">
          {projects.list.map((project, index) => {
            const delayClass = `delay-${(index % 5 + 1) * 100}`
            return (
              <div
                key={project.title}
                className={`col-12 col-md-6 fade-up ${delayClass} ${isVisible ? 'in-view' : ''}`}
              >
                <div className="glass-card p-4 p-md-5 rounded-4 h-100 d-flex flex-column hover-scale" style={{ transition: 'all 0.3s ease', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div
                    className="rounded-4 d-flex align-items-center justify-content-center mb-4"
                    style={{ width: '3.5rem', height: '3.5rem', fontSize: '1.5rem', background: 'linear-gradient(to bottom right, rgba(99, 102, 241, 0.2), rgba(124, 58, 237, 0.2))' }}
                  >
                    {project.icon}
                  </div>
                  <h3 className="h5 fw-semibold text-light mb-3" style={{ transition: 'color 0.3s' }}>
                    {project.title}
                  </h3>
                  <p className="flex-grow-1" style={{ color: '#64748b', marginBottom: '1.5rem' }}>{project.description}</p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-pill small"
                        style={{ background: 'rgba(255,255,255,0.05)', color: '#94a3b8' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="d-flex align-items-center gap-4 mt-auto pt-3 border-top" style={{ borderColor: 'rgba(255,255,255,0.05) !important' }}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center text-decoration-none small fw-medium text-secondary hover:text-primary"
                        style={{ transition: 'color 0.2s', color: '#94a3b8' }}
                        data-cursor-hover
                      >
                        <svg className="me-2" style={{ width: '1rem', height: '1rem' }} fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                        Repository
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center text-decoration-none small fw-medium text-secondary hover:text-primary"
                        style={{ transition: 'color 0.2s', color: '#94a3b8' }}
                        data-cursor-hover
                      >
                        <svg className="me-2" style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

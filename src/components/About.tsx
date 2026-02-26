import { useEffect, useRef, useState } from 'react'
import { portfolioData } from '../data/portfolio'

export default function About() {
  const { about } = portfolioData
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
    <section id="about" className="py-5 px-4" ref={ref}>
      <div className="container" style={{ maxWidth: '1152px' }}>
        <div
          className={`glass-card p-4 p-md-5 rounded-4 fade-up ${isVisible ? 'in-view' : ''}`}
        >
          <div className="d-flex flex-column flex-lg-row gap-5 align-items-start mt-4">
            <div
              className={`flex-shrink-0 w-100 fade-up delay-200 ${isVisible ? 'in-view' : ''}`}
              style={{ flex: '0 0 auto', width: '33.333333%' }}
            >
              <div className="w-100 rounded-4 d-flex align-items-center justify-content-center overflow-hidden" style={{ aspectRatio: '1', background: 'linear-gradient(to bottom right, rgba(99, 102, 241, 0.2), rgba(124, 58, 237, 0.2))', border: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ fontSize: '6rem' }}>👩‍💻</span>
              </div>
            </div>

            <div className="flex-grow-1" style={{ gap: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div>
                <h2
                  className={`display-5 fw-bold mb-4 fade-up delay-100 ${isVisible ? 'in-view' : ''}`}
                >
                  <span className="text-light">{about.title}</span>
                  <span className="text-gradient">
                    {about.highlight}
                  </span>
                </h2>

                <p
                  className={`lead fade-up delay-200 ${isVisible ? 'in-view' : ''}`}
                  style={{ color: '#94a3b8', lineHeight: '1.8' }}
                >
                  {about.description}
                </p>
              </div>

              <div
                className={`fade-up delay-300 ${isVisible ? 'in-view' : ''}`}
              >
                <h3 className="h4 fw-bold text-light mb-4 pb-2 border-bottom" style={{ borderColor: 'rgba(255,255,255,0.1) !important' }}>Experience</h3>
                {about.experience.map((exp, index) => (
                  <div key={index} className="rounded-4 p-4 mb-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-2">
                      <h4 className="h5 fw-semibold text-primary">{exp.title}</h4>
                      <span className="small px-3 py-1 rounded-pill" style={{ background: 'rgba(99, 102, 241, 0.1)', color: '#94a3b8', width: 'fit-content' }}>{exp.period}</span>
                    </div>
                    <div className="fw-medium mb-3" style={{ color: '#cbd5e1' }}>{exp.company}</div>
                    <ul className="small" style={{ color: '#94a3b8', paddingLeft: '1.5rem', marginBottom: 0 }}>
                      {exp.points.map((point, idx) => (
                        <li key={idx} className="mb-2">{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div
                className={`fade-up delay-400 ${isVisible ? 'in-view' : ''}`}
              >
                <h3 className="h4 fw-bold text-light mb-4 pb-2 border-bottom" style={{ borderColor: 'rgba(255,255,255,0.1) !important' }}>Education</h3>
                <div className="d-flex flex-column gap-3">
                  {about.education.map((edu, index) => (
                    <div key={index} className="rounded-4 p-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <div className="d-flex flex-column flex-md-row justify-content-between mb-2">
                        <h4 className="h5 fw-semibold text-primary">{edu.degree}</h4>
                        <span className="small px-3 py-1 rounded-pill" style={{ background: 'rgba(99, 102, 241, 0.1)', color: '#94a3b8', width: 'fit-content' }}>{edu.period}</span>
                      </div>
                      <div className="fw-medium mb-1" style={{ color: '#cbd5e1' }}>{edu.institution}</div>
                      <div className="small fw-medium" style={{ color: 'rgba(232, 121, 249, 0.8)' }}>{edu.score}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import './Hero.css'

export default function Hero() {
  const [imgError, setImgError] = useState(false)
  const profileSrc = imgError ? '/profile-placeholder.svg' : '/profile.jpg'

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-label">Senior Software Engineer</p>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Subhash M</span>
          </h1>
          <p className="hero-tagline">
            Building high-performance microservices, REST APIs, and enterprise applications
            with Java, Spring Boot, and cloud technologies. 8+ years designing scalable
            distributed systems and robust CI/CD pipelines.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Get in touch</a>
            <a href="#experience" className="btn btn-secondary">View experience</a>
          </div>
        </div>
        <figure className="hero-photo">
          <img
            src={profileSrc}
            alt="Subhash M"
            onError={() => setImgError(true)}
          />
          <figcaption className="hero-photo-label">
            {imgError ? 'Add your picture (profile.jpg in public folder)' : ''}
          </figcaption>
        </figure>
      </div>
      <div className="hero-gradient" aria-hidden="true" />
    </section>
  )
}

import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <p>
            Senior Software Engineer with <strong>8+ years</strong> of expertise in building
            high-performance microservices, REST APIs, and enterprise applications using
            Java, Spring Boot, and cloud technologies.
          </p>
          <p>
            Proven track record in designing scalable distributed systems, optimizing
            database performance, and implementing robust CI/CD pipelines. Experienced in
            applying <strong>SOLID principles</strong> and design patterns (DAO, DTO,
            Singleton, Factory, MVC) to architect maintainable, production-grade applications.
          </p>
        </div>
      </div>
    </section>
  )
}

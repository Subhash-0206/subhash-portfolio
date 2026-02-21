import './Education.css'

const schools = [
  {
    school: 'Texas Tech University',
    degree: 'Master of Science in Computer Science',
    gpa: 'GPA: 3.7/4.0',
    location: 'Lubbock, TX',
    period: 'Aug 2022 – Dec 2023',
  },
  {
    school: 'IIIT RK Valley',
    degree: 'Bachelor of Technology in Electronics & Communication Engineering',
    gpa: 'GPA: 8.5/10.0',
    location: 'Andhra Pradesh, India',
    period: 'Jun 2012 – May 2016',
  },
]

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="edu-list">
          {schools.map((s, i) => (
            <div key={i} className="edu-card">
              <h3 className="edu-school">{s.school}</h3>
              <p className="edu-degree">{s.degree}</p>
              <p className="edu-gpa">{s.gpa}</p>
              <p className="edu-meta">
                <span>{s.location}</span>
                <span className="edu-period">{s.period}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

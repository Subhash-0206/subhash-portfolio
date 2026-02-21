import './Achievements.css'

const items = [
  {
    title: 'Performance Optimization',
    desc: 'Reduced API latency by 45% through strategic caching and query optimization; improved database query performance by 30% via indexing and stored procedure refactoring.',
  },
  {
    title: 'Automation Excellence',
    desc: 'Reduced manual interventions by 90% through event-driven automation with AWS Lambda and SQS; eliminated manual data reconciliation saving 15+ hours weekly through custom Excel comparison tooling.',
  },
  {
    title: 'System Reliability',
    desc: 'Achieved 99.9% uptime through comprehensive monitoring and alerting; reduced MTTR by 40% with proactive incident detection.',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <h2 className="section-title">Key Achievements</h2>
        <div className="achievements-grid">
          {items.map((a, i) => (
            <div key={i} className="achievement-card">
              <h3 className="achievement-title">{a.title}</h3>
              <p className="achievement-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

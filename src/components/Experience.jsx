import './Experience.css'

const jobs = [
  {
    company: 'Lumen Technologies',
    role: 'Senior Software Engineer, Distributed Systems',
    location: 'Richardson, Texas',
    period: 'Sep 2024 – Present',
    bullets: [
      'Designed and delivered mission-critical billing microservices using Java and Spring Boot, exposing secure REST APIs via API Gateway with JWT and OAuth2.',
      'Developed backend integration layers for the Lumen AI chatbot, leveraging LLMs to automate 40% of customer support inquiries.',
      'Architected event-driven data ingestion pipelines with AWS Lambda, S3, and SQS, processing 100K+ events per day.',
      'Established CI/CD pipelines using Jenkins with automated JUnit and integration testing, cutting deployment cycles by 60%.',
      'Built production observability with Splunk dashboards, contributing to 99.9% service uptime.',
      'Drove performance optimization through caching and query tuning, achieving 45% reduction in API response times.',
    ],
  },
  {
    company: 'Meijer',
    role: 'Lead Software Engineer, Payments & Billing',
    location: 'Remote, Michigan',
    period: 'Feb 2024 – Sep 2024',
    bullets: [
      'Developed Reverse and Rebill microservices using Spring Boot and RESTful APIs with resilience patterns (circuit breakers, centralized error handling).',
      'Implemented serverless workflows with Azure Functions, Blob Storage, and Service Bus for 50K+ daily financial transactions.',
      'Led production incident resolution with Splunk-based analysis, reducing MTTR by 30–40%.',
      'Engineered high-performance JDBC data access layers with optimized transaction boundaries and batch processing.',
      'Enhanced reliability with Azure Monitor for anomaly detection, reducing incident resolution time by 40%.',
    ],
  },
  {
    company: 'Occunet',
    role: 'Software Engineer Intern',
    location: 'Amarillo, Texas',
    period: 'Jun 2023 – Aug 2023',
    bullets: [
      'Developed and deployed Flask-based REST services on Microsoft Azure with external API integrations.',
      'Applied NLP (NLTK) for sentiment extraction from social media streams.',
      'Performed large-scale data transformation with Pandas, correlating sentiment with Yahoo Finance market data.',
    ],
  },
  {
    company: 'Siemens',
    role: 'Software Engineer, Automation Systems',
    location: 'Bengaluru, India',
    period: 'Oct 2021 – Aug 2022',
    bullets: [
      'Designed production-grade industrial scheduling platform using Java, Spring Boot, and SQL Server.',
      'Built real-time operational dashboards, driving 25% improvement in operational efficiency.',
      'Integrated SonarQube for code quality, reducing technical debt by 30%.',
      'Implemented centralized logging and alerting with AWS CloudWatch; maintained Jenkins CI/CD on AWS.',
    ],
  },
  {
    company: 'BP (British Petroleum)',
    role: 'Software Engineer, Monitoring & Observability Systems',
    location: 'Bengaluru, India',
    period: 'Dec 2016 – Sep 2021',
    bullets: [
      'Developed scalable Spring Boot microservices for Oil & Gas systems, processing 1M+ transactions daily.',
      'Built real-time alerting and monitoring interfaces with JavaScript, HTML, and backend APIs; 70% faster response times.',
      'Standardized releases via Azure DevOps CI/CD with multi-stage approvals.',
      'Optimized database performance (SQL, stored procedures, indexing), achieving 30% faster execution.',
      'Created C#, ASP.Net MVC automation for Excel-based reconciliation, saving 15+ hours per week.',
      'Designed KPI monitoring dashboard (C#, ASP.NET MVC, SQL Server) for Oil & Gas well conditions.',
      'Automated Azure VM patching with shell scripts for 100% security compliance.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {jobs.map((job, i) => (
            <article key={i} className="job">
              <div className="job-header">
                <div>
                  <h3 className="job-role">{job.role}</h3>
                  <p className="job-company">{job.company}</p>
                </div>
                <div className="job-meta">
                  <span className="job-location">{job.location}</span>
                  <span className="job-period">{job.period}</span>
                </div>
              </div>
              <ul className="job-bullets">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

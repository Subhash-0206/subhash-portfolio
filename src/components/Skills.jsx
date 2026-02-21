import './Skills.css'

const groups = [
  {
    title: 'Languages',
    items: ['Java (8/11/17)', 'SQL', 'Python', 'C#', 'JavaScript'],
  },
  {
    title: 'Backend & APIs',
    items: [
      'Spring Boot',
      'Spring MVC',
      'Hibernate',
      'JPA',
      'JDBC',
      '.NET Core',
      'RESTful APIs',
      'SOAP',
      'OAuth2',
      'JWT',
      'Swagger/OpenAPI',
      'LLM Integration',
    ],
  },
  {
    title: 'Databases',
    items: ['MS SQL Server', 'MySQL', 'Oracle', 'DynamoDB', 'Azure SQL', 'Cosmos DB', 'Pinecone'],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      'AWS (Lambda, S3, SQS, EC2, RDS, CloudWatch, Step Functions, Bedrock)',
      'Azure (Functions, App Service, Blob, Service Bus, Monitor, Logic Apps, ADF)',
      'Jenkins',
      'Azure DevOps',
      'Docker',
      'Git',
      'Kafka',
    ],
  },
  {
    title: 'Testing & Quality',
    items: ['JUnit', 'Mockito', 'Postman', 'SonarQube', 'Selenium'],
  },
  {
    title: 'Core',
    items: [
      'Microservices Architecture',
      'Event-Driven Design',
      'Multithreading',
      'Performance Optimization',
      'Data Structures & Algorithms',
      'Prompt Engineering',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {groups.map((g, i) => (
            <div key={i} className="skill-group">
              <h3 className="skill-group-title">{g.title}</h3>
              <div className="skill-tags">
                {g.items.map((item, j) => (
                  <span key={j} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

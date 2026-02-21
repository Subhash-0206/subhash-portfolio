import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-intro">
          Open to new opportunities and collaborations. Reach out via email, phone, or LinkedIn.
        </p>
        <div className="contact-links">
          <a href="tel:+18068051501" className="contact-item">
            <span className="contact-label">Phone</span>
            <span className="contact-value">+1-806-805-1501</span>
          </a>
          <a href="mailto:subhash.muchch@outlook.com" className="contact-item">
            <span className="contact-label">Email</span>
            <span className="contact-value">subhash.muchch@outlook.com</span>
          </a>
          <a
            href="https://linkedin.com/in/subhash-muchchunoor"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">linkedin.com/in/subhash-muchchunoor</span>
          </a>
        </div>
      </div>
    </section>
  )
}

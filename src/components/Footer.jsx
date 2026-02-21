import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {year} Subhash M. Senior Software Engineer.</p>
        <p className="footer-tagline">Built with React</p>
      </div>
    </footer>
  )
}

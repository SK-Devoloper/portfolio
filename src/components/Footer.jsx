import "../styles/footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-logo">
              <span className="logo-icon">🚀</span>
              <h2>Sudais <span>Khan</span></h2>
            </div>
            <p className="brand-tagline">
              Software Engineering Student · AI Enthusiast · Full-Stack Developer
            </p>
            <div className="brand-description">
              Building innovative solutions for a better tomorrow
            </div>
            <div className="footer-social">
              <a href="https://github.com/SK-Developer" target="_blank" rel="noopener noreferrer" className="social-link github">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:surais094design@gmail.com" className="social-link email">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                  <path fill="currentColor" d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Explore</h3>
            <ul>
              <li><a href="#home">🏠 Home</a></li>
              <li><a href="#about">👤 About</a></li>
              <li><a href="#skills">💡 Skills</a></li>
              <li><a href="#projects">🚀 Projects</a></li>
              <li><a href="#education">🎓 Education</a></li>
              <li><a href="#achievements">🏆 Achievements</a></li>
              <li><a href="#contact">📬 Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Get in Touch</h3>
            <ul>
              <li>
                <span className="contact-icon">📧</span>
                <a href="mailto:sudais094design@gmail.com">sudais094design@gmail.com</a>
              </li>
              <li>
                <span className="contact-icon">📱</span>
                <a href="tel:+923450949831">+92-345-0949831</a>
              </li>
              <li>
                <span className="contact-icon">📍</span>
                <span>Islamabad, Pakistan</span>
              </li>
              <li>
                <span className="contact-icon">🐙</span>
                <a href="https://github.com/SK-Developer" target="_blank" rel="noopener noreferrer">github.com/SK-Developer</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-newsletter">
          <p>📬 Stay connected for future projects & updates</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} <span className="highlight">Sudais Khan</span>
            </p>
            <p className="footer-credit">
              Built with <span className="heart">❤️</span> using React
            </p>
          </div>
          <div className="footer-bottom-links">
            <a href="#home">Home</a>
            <span className="divider">|</span>
            <a href="#projects">Projects</a>
            <span className="divider">|</span>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
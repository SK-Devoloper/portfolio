import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title" data-aos="fade-up">📬 Contact Me</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Let's connect and build something amazing together!
        </p>

        <div className="contact-wrapper">
          <div className="contact-info" data-aos="fade-right">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <h4>Email</h4>
                <a href="mailto:sudais094design@gmail.com">sudais094design@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div>
                <h4>Phone</h4>
                <a href="tel:+923450949831">+92-345-0949831</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h4>Location</h4>
                <span>Islamabad, Pakistan</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🐙</span>
              <div>
                <h4>GitHub</h4>
                <a href="https://github.com/SK-Developer" target="_blank" rel="noopener noreferrer">github.com/SK-Developer</a>
              </div>
            </div>
          </div>

          <form className="contact-form" data-aos="fade-left">
            <input type="text" placeholder="Your Name" data-aos="fade-up" data-aos-delay="100" />
            <input type="email" placeholder="Your Email" data-aos="fade-up" data-aos-delay="200" />
            <input type="text" placeholder="Subject" data-aos="fade-up" data-aos-delay="300" />
            <textarea placeholder="Your Message" rows="5" data-aos="fade-up" data-aos-delay="400"></textarea>
            <button type="submit" data-aos="fade-up" data-aos-delay="500">Send Message ✉️</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
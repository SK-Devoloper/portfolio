import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left" data-aos="fade-right" data-aos-duration="1000">
        <span className="badge" data-aos="fade-up" data-aos-delay="100">
          👋 Welcome to My Portfolio
        </span>

        <h1 data-aos="fade-up" data-aos-delay="200">
          Hi, I'm <span className="highlight">Sudais Khan</span>
        </h1>

        <h2 className="hero-title" data-aos="fade-up" data-aos-delay="300">
          Software Engineering Student
        </h2>

        <p data-aos="fade-up" data-aos-delay="400">
          Passionate about building modern software solutions using
          Artificial Intelligence, Full Stack Development, Databases,
          APIs, and Automation. I enjoy creating innovative and
          user-friendly applications that solve real-world problems.
        </p>

        <div className="buttons" data-aos="fade-up" data-aos-delay="500">
          <a href="/cv.pdf" download className="primary">
            📄 Download CV
          </a>

          <button
            className="secondary"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            🚀 View Projects
          </button>
        </div>

        <div className="tech-stack" data-aos="fade-up" data-aos-delay="600">
          <span>⚛ React</span>
          <span>☕ Java</span>
          <span>🐍 Python</span>
          <span>🗄 MySQL</span>
          <span>🤖 AI</span>
          <span>🔗 APIs</span>
          <span>⚡ Automation</span>
        </div>

        <div className="hero-stats" data-aos="fade-up" data-aos-delay="700">
          <div className="stat">
            <h3>6+</h3>
            <p>Projects</p>
          </div>

          <div className="stat">
            <h3>15+</h3>
            <p>Technologies</p>
          </div>

          <div className="stat">
            <h3>100%</h3>
            <p>Learning</p>
          </div>
        </div>
      </div>

      <div className="hero-right" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
        <div className="profile-circle">
          <img src="/profile.jpeg" alt="Sudais Khan" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
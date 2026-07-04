import "../styles/about.css";

function About() {
  return (
    <section className="about" id="about">
      <h2 data-aos="fade-up">About Me</h2>
      
      <div className="about-card">
        <div className="about-left" data-aos="fade-right" data-aos-duration="1000">
          <h3 data-aos="fade-up" data-aos-delay="100">Software Engineer & Java Developer</h3>
          
          <p data-aos="fade-up" data-aos-delay="200">
            I'm Sudais Khan, a passionate Software Engineer with expertise in 
            Java development, AI automation, and modern web technologies. 
            I love building robust desktop applications and innovative web solutions.
          </p>
          
          <p data-aos="fade-up" data-aos-delay="300">
            With hands-on experience in Java Swing, Oracle APEX, and React.js, 
            I've developed various projects including Library Management Systems, 
            Hotel Management Systems, and AI-powered applications. I'm constantly 
            exploring new technologies to solve real-world problems.
          </p>
          
          <div className="about-stats">
            <div className="stat" data-aos="zoom-in" data-aos-delay="400">
              <span className="stat-number">6+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat" data-aos="zoom-in" data-aos-delay="500">
              <span className="stat-number">4</span>
              <span className="stat-label">Tech Stacks</span>
            </div>
            <div className="stat" data-aos="zoom-in" data-aos-delay="600">
              <span className="stat-number">1+</span>
              <span className="stat-label">Years Learning</span>
            </div>
          </div>
        </div>
        
        <div className="about-right" data-aos="fade-left" data-aos-duration="1000">
          <div className="info-box" data-aos="flip-up" data-aos-delay="200">
            <h4>🎓 Education</h4>
            <p>BS Software Engineering</p>
            <span className="info-sub">Currently Enrolled</span>
          </div>
          
          <div className="info-box" data-aos="flip-up" data-aos-delay="300">
            <h4>💻 Core Skills</h4>
            <p>Java • Python • React.js</p>
            <p className="info-sub">Oracle APEX • JavaScript</p>
          </div>
          
          <div className="info-box" data-aos="flip-up" data-aos-delay="400">
            <h4>🎯 What I Build</h4>
            <p>Desktop Applications</p>
            <p className="info-sub">Web Apps • AI Solutions</p>
          </div>
          
          <div className="info-box" data-aos="flip-up" data-aos-delay="500">
            <h4>📚 Key Projects</h4>
            <p>Library Management System</p>
            <p className="info-sub">Hotel Management • Airbnb</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
import "../styles/education.css";

function Education() {
  return (
    <section className="education" id="education">
      <div className="education-container">
        <h2 className="section-title" data-aos="fade-up">🎓 Education & Learning Journey</h2>
        
        <div className="education-grid">
          {/* University Card */}
          <div className="edu-card main-card" data-aos="fade-up" data-aos-delay="100">
            <div className="edu-icon">🏛️</div>
            <h3>BS Software Engineering</h3>
            <h4>COMSATS University Islamabad</h4>
            <p className="edu-year">Spring 2025 – Present</p>
            <p className="edu-semester">📍 4th Semester</p>
            <div className="edu-cgpa">
              <span className="cgpa-label">CGPA:</span>
              <span className="cgpa-value">3.14/4.0</span>
            </div>
            <p className="edu-description">
              Currently pursuing a Bachelor's degree in Software Engineering with 
              focus on full-stack development, AI automation, and database systems.
            </p>
          </div>

          {/* Coursework Card */}
          <div className="edu-card" data-aos="fade-up" data-aos-delay="200">
            <div className="edu-icon">📚</div>
            <h3>Relevant Coursework</h3>
            <div className="course-list">
              <span className="course-tag">💻 Programming Fundamentals</span>
              <span className="course-tag">☕ Object Oriented Programming</span>
              <span className="course-tag">📊 Data Structures</span>
              <span className="course-tag">🗄️ Database Systems</span>
              <span className="course-tag">🌐 Web Development</span>
              <span className="course-tag">📐 Discrete Mathematics</span>
              <span className="course-tag">🧮 Calculus</span>
              <span className="course-tag">🔗 Software Engineering</span>
            </div>
          </div>

          {/* Current Focus Card */}
          <div className="edu-card" data-aos="fade-up" data-aos-delay="300">
            <div className="edu-icon">🎯</div>
            <h3>Current Focus</h3>
            <div className="focus-list">
              <div className="focus-item">
                <span className="focus-icon">🤖</span>
                <span>AI Automation</span>
                <div className="focus-bar"><div className="focus-progress" style={{width: "75%"}}></div></div>
              </div>
              <div className="focus-item">
                <span className="focus-icon">⚛️</span>
                <span>React Development</span>
                <div className="focus-bar"><div className="focus-progress" style={{width: "80%"}}></div></div>
              </div>
              <div className="focus-item">
                <span className="focus-icon">☕</span>
                <span>Java</span>
                <div className="focus-bar"><div className="focus-progress" style={{width: "85%"}}></div></div>
              </div>
              <div className="focus-item">
                <span className="focus-icon">🐍</span>
                <span>Python</span>
                <div className="focus-bar"><div className="focus-progress" style={{width: "70%"}}></div></div>
              </div>
              <div className="focus-item">
                <span className="focus-icon">🗄️</span>
                <span>MySQL & Oracle</span>
                <div className="focus-bar"><div className="focus-progress" style={{width: "75%"}}></div></div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Timeline */}
        <div className="learning-timeline" data-aos="fade-up" data-aos-delay="400">
          <h3>📈 Learning Journey</h3>
          <div className="timeline-container">
            <div className="timeline-step">
              <div className="step-dot"></div>
              <div className="step-content">
                <h4>Spring 2025</h4>
                <p>Started BS Software Engineering</p>
                <span className="step-tag">Programming Fundamentals</span>
              </div>
            </div>
            <div className="timeline-step">
              <div className="step-dot"></div>
              <div className="step-content">
                <h4>Fall 2025</h4>
                <p>Advanced Programming & Databases</p>
                <span className="step-tag">Java • MySQL • OOP</span>
              </div>
            </div>
            <div className="timeline-step">
              <div className="step-dot"></div>
              <div className="step-content">
                <h4>Spring 2026</h4>
                <p>Web Development & AI Automation</p>
                <span className="step-tag">React • Python • APIs</span>
              </div>
            </div>
            <div className="timeline-step future">
              <div className="step-dot"></div>
              <div className="step-content">
                <h4>Future</h4>
                <p>Aspiring AI Automation Engineer</p>
                <span className="step-tag">Internship • Full Stack • AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
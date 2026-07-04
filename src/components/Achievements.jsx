import "../styles/achievements.css";

function Achievements() {
  const achievements = [
    {
      id: 1,
      icon: "📚",
      title: "Academic Progress",
      description: "4th Semester BS Software Engineering student with strong academic record",
      stats: "3.14 CGPA"
    },
    {
      id: 2,
      icon: "💻",
      title: "Projects Completed",
      description: "Built 6+ software projects using modern technologies",
      stats: "6+ Projects"
    },
    {
      id: 3,
      icon: "🛠️",
      title: "Technologies Learned",
      description: "Mastered 15+ technologies including React, Java, Python, and more",
      stats: "15+ Tech"
    },
    {
      id: 4,
      icon: "🎯",
      title: "Career Goal",
      description: "Aspiring AI Automation Engineer & Full Stack Developer",
      stats: "AI Engineer"
    },
    {
      id: 5,
      icon: "🏛️",
      title: "University",
      description: "Studying at COMSATS University Islamabad",
      stats: "COMSATS"
    },
    {
      id: 6,
      icon: "🚀",
      title: "Learning Journey",
      description: "Continuous learning in AI, Automation, and Web Development",
      stats: "Always Learning"
    }
  ];

  return (
    <section className="achievements" id="achievements">
      <div className="achievements-container">
        <h2 className="section-title" data-aos="fade-up">🏆 Achievements & Milestones</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          My journey as a Software Engineering student
        </p>

        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div 
              className="achievement-card" 
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100 + 200}
            >
              <div className="achievement-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="achievement-stats">{item.stats}</div>
            </div>
          ))}
        </div>

        {/* Additional Stats Section */}
        <div className="achievement-stats-large">
          <div className="stat-item" data-aos="zoom-in" data-aos-delay="100">
            <div className="stat-number">6+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-item" data-aos="zoom-in" data-aos-delay="200">
            <div className="stat-number">15+</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-item" data-aos="zoom-in" data-aos-delay="300">
            <div className="stat-number">4th</div>
            <div className="stat-label">Semester</div>
          </div>
          <div className="stat-item" data-aos="zoom-in" data-aos-delay="400">
            <div className="stat-number">100%</div>
            <div className="stat-label">Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
import "../styles/skills.css";

function Skills() {
  const skills = [
    { name: "React.js", level: "Advanced", icon: "⚛️", color: "#61dafb", progress: 90 },
    { name: "Java", level: "Advanced", icon: "☕", color: "#007396", progress: 85 },
    { name: "Python", level: "Advanced", icon: "🐍", color: "#3776ab", progress: 80 },
    { name: "JavaScript", level: "Advanced", icon: "🟨", color: "#f7df1e", progress: 85 },
    { name: "HTML/CSS", level: "Advanced", icon: "🌐", color: "#e34f26", progress: 90 },
    { name: "Node.js", level: "Intermediate", icon: "🟢", color: "#339933", progress: 65 },
    { name: "Oracle APEX", level: "Intermediate", icon: "🗄️", color: "#f80000", progress: 70 },
    { name: "Git/GitHub", level: "Advanced", icon: "📊", color: "#f05032", progress: 85 },
  ];

  return (
    <section className="skills" id="skills">
      <h2 data-aos="fade-up">My Skills</h2>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="skill-card"
            data-aos="flip-up"
            data-aos-delay={index * 100 + 100}
          >
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <h3>{skill.name}</h3>
            <span className="skill-level" style={{ color: skill.color }}>
              {skill.level}
            </span>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ 
                  width: `${skill.progress}%`,
                  background: skill.color 
                }}
              ></div>
            </div>
            <span className="skill-percentage">{skill.progress}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
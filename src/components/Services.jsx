import "../styles/services.css";

function Services() {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Building responsive and modern web applications using React.js"
    },
    {
      icon: "🤖",
      title: "AI Automation",
      description: "Creating intelligent automation solutions with AI and Python"
    },
    {
      icon: "🗄️",
      title: "Database Design",
      description: "Designing and implementing efficient database systems"
    },
    {
      icon: "☕",
      title: "Java Development",
      description: "Building robust applications using Java and OOP principles"
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2 className="section-title" data-aos="fade-up">💡 What I Do</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Services and technologies I work with
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className="service-card" 
              key={index}
              data-aos="flip-up"
              data-aos-delay={index * 100 + 200}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
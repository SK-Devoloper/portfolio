import "../styles/projects.css";
import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 data-aos="fade-up">My Projects</h2>

      <p className="projects-subtitle" data-aos="fade-up" data-aos-delay="100">
        Here are some of the projects I've built.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            className="project-card" 
            key={project.id}
            data-aos="flip-up"
            data-aos-delay={index * 100 + 200}
          >
            <div className="project-header">
              <span className="project-icon">
                {project.icon}
              </span>
              <h3>{project.title}</h3>
            </div>

            <p className="project-desc">
              {project.description}
            </p>

            <div className="project-tech">
              {project.technologies.map((tech, techIndex) => (
                <span className="tech-tag" key={techIndex}>
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-buttons">
              <a href={project.github} className="project-btn github-btn">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href={project.demo} className="project-btn demo-btn">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
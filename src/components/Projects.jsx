
import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Phone Price Prediction",
    date: "Feb 2023",
    description: "Analyzed a company-provided dataset, estimating errors and contributing to data-driven insights. Implemented various ML models to determine the optimal solution.",
    tech: ["Python", "Machine Learning", "Data Analysis"],
    link: "#" // Placeholder
  },
  {
    title: "Transactions Dashboard",
    date: "May 2023",
    description: "Developed an interactive dashboard featured daily/weekly profit percentages and intuitive bar chart visualizations for efficient transaction management.",
    tech: ["Next.js", "Inline-CSS", "React"],
    link: "#"
  },
  {
    title: "Weather App",
    date: "July 2023",
    description: "Developed a feature that displays real-time weather conditions using an API for city input and providing updates.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <h2 className="section-title text-center">Personal Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="card project-card">
              <div className="project-content">
                <span className="project-date">{project.date}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
                {/* <a href={project.link} className="btn-link">View Project →</a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

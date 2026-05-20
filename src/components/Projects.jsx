import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Phone Price Prediction",
    date: "Feb 2023",
    description: "Built an end-to-end Machine Learning model to predict mobile phone prices. Performed intensive exploratory data analysis, handled preprocessing, estimated error bounds, and compared model accuracy to discover the optimal predictive solution.",
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
    link: "https://github.com/akarshit-kumar"
  },
  {
    title: "Transaction Analytics Dashboard",
    date: "May 2023",
    description: "Designed a premium analytics dashboard that aggregates profit percentages and visualizes transactional trends using real-time interactive bar charts. Delivers swift and intuitive UI controls for granular data filtering.",
    tech: ["Next.js", "React", "Vanilla CSS"],
    link: "https://github.com/akarshit-kumar"
  },
  {
    title: "Weather Monitoring App",
    date: "July 2023",
    description: "Developed a responsive web application that fetches and displays real-time weather statistics across global search queries. Implemented direct REST API integrations and asynchronous data updates.",
    tech: ["HTML", "Vanilla CSS", "JavaScript", "REST API"],
    link: "https://github.com/akarshit-kumar"
  }
];

const Projects = () => {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <h2 className="section-title text-center">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="glass-card project-card">
              <div className="project-header">
                <div className="project-folder-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <span className="project-date">{project.date}</span>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
              
              <div className="project-footer">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                  View Code Repository
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import './Experience.css';

const experienceData = [
  {
    company: "L&T Technology Services",
    role: "Engineer (Digital Auto, Aero & Medical)",
    period: "Sept 2024 - Present",
    bullets: [
      "Developing scalable, high-performance backend services using Spring Boot, REST APIs, and GraphQL with SQL and PostgreSQL.",
      "Building and enhancing user interfaces using React and Streamlit, ensuring seamless and intuitive frontend integration.",
      "Deploying and orchestrating applications on AWS (EC2, S3) with Docker and Kubernetes, boosting system reliability and scalability.",
      "Engineering data processing pipelines with Databricks and PySpark to manage large-scale structured and unstructured datasets.",
      "Coordinating agile team sprints on Azure Boards, tracking progress, assigning tasks, and resolving technical bottlenecks.",
      "Collaborating across cross-functional teams (backend, frontend, and cloud) to troubleshoot critical issues and ensure stability."
    ],
    tech: ["React", "Spring Boot", "GraphQL", "AWS", "Kubernetes", "Databricks", "PostgreSQL"]
  },
  {
    company: "VERZEO",
    role: "Machine Learning Intern (Remote)",
    period: "Jan 2023 - Feb 2023",
    bullets: [
      "Gained comprehensive experience in Python programming, exploratory data analysis, and predictive model construction.",
      "Trained, optimized, and evaluated supervised machine learning algorithms to complete an end-to-end pricing predictive model.",
      "Assessed model errors and performance metrics to identify the optimal solution, contributing data-driven insights."
    ],
    tech: ["Python", "Machine Learning", "Scikit-Learn", "Pandas", "NumPy"]
  }
];

const Experience = () => {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <h2 className="section-title text-center">Work Experience</h2>
        
        <div className="experience-timeline">
          {experienceData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot-container">
                <div className="timeline-dot"></div>
              </div>
              
              <div className="glass-card timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="exp-company">{item.company}</h3>
                    <h4 className="exp-role">{item.role}</h4>
                  </div>
                  <span className="exp-period">{item.period}</span>
                </div>
                
                <ul className="exp-bullet-list">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="exp-bullet-item">
                      <span className="bullet-indicator">✦</span>
                      <p>{bullet}</p>
                    </li>
                  ))}
                </ul>
                
                <div className="exp-tech-tags">
                  {item.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

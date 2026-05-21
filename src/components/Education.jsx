import React from 'react';
import './Education.css';

const educationData = [
  {
    school: "National Institute Of Technology (NIT), Srinagar",
    period: "2020 - 2024",
    degree: "B.Tech in Information Technology",
    // score: "CGPA: 7.65",
    description: "Rigorous training in computer science, system architecture, database management, and advanced software engineering methodologies."
  },
  {
    school: "SP Smart School, Sarore",
    period: "2020",
    degree: "JKBOSE - Senior Secondary (Class XII)",
    // score: "Percentage: 78.8%",
    description: "Focused on core sciences and mathematics, building a robust analytical and quantitative foundation."
  },
  {
    school: "S.A.L.E.G School, Bishnah",
    period: "2018",
    degree: "JKBOSE - Secondary (Class X)",
    // score: "Percentage: 73.2%",
    description: "Acquired foundational knowledge across diverse academic disciplines with excellent performance."
  }
];

const Education = () => {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <h2 className="section-title text-center">Education</h2>

        <div className="education-grid">
          {educationData.map((item, index) => (
            <div key={index} className="glass-card education-card">
              <div className="edu-header">
                <div className="edu-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
                </div>
                <span className="edu-period">{item.period}</span>
              </div>

              <h3 className="edu-school">{item.school}</h3>
              <h4 className="edu-degree">{item.degree}</h4>
              <p className="edu-desc">{item.description}</p>

              {item.score && (
                <div className="edu-score-badge">
                  <span className="score-label">Result:</span>
                  <span className="score-value">{item.score}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

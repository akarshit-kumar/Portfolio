
import React from 'react';
import './Skills.css';

const skillsData = {
  "Languages": ["C++", "Python", "JavaScript", "Java"],
  "Frameworks": ["React", "Next.js"],
  "Developer Tools": ["HTML", "CSS", "Git", "VS Code"],
  "Cloud/Databases": ["SQL"],
  "Coursework": ["DSA", "DBMS", "Operating Systems"],
  "Soft Skills": ["Communication", "Leadership", "Problem Solving"],
  "Interests": ["Sudoku", "Chess", "Cricket", "Kabaddi"]
};

const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <h2 className="section-title text-center">Technical Skills & Interests</h2>
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, items]) => (
            <div key={category} className="card skill-card">
              <h3 className="skill-category">{category}</h3>
              <div className="skill-tags">
                {items.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

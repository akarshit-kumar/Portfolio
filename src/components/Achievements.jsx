import React from 'react';
import './Achievements.css';

const responsibilities = [
  {
    role: "2nd Runner Up - Mysore Open Hack 3.0",
    organization: "L&T Technology Services",
    period: "Nov 2024",
    description: "Competed in a high-intensity 24-hour hackathon among 600+ developers and 160+ engineering teams. Engineered an end-to-end intelligent solution leveraging AI, Computer Vision, IoT data streams, and Cloud deployment models."
  },
  {
    role: "Team Coordinator - Client Project",
    organization: "L&T Technology Services",
    period: "Jan 2025 - Apr 2026",
    description: "Orchestrated cloud operations, task delegation, and timeline management on Azure Boards. Managed critical AWS instances, coordinated closely with backend/frontend squads, and successfully deployed updates to staging."
  },
  {
    role: "Management Team Lead - Rang-e-Chinar Cultural Fest",
    organization: "NIT Srinagar",
    period: "Spring 2023",
    description: "Spearheaded on-ground operations, security flow, and crowd management strategies for a large-scale regional festival of 5,000+ attendees. Directed a volunteer team of 30+ students, resolving real-time operational bottlenecks."
  }
];

const certificates = [
  {
    title: "LATEX Professional Citation",
    issuer: "IIT Bombay",
    date: "Jan 2022",
    details: "Successfully cleared the advanced examination on document preparation, mathematical typesetting, and slide presentation systems hosted by Spoken Tutorial, IIT Bombay."
  },
  {
    title: "HTML5 Certification Test",
    issuer: "Infosys Springboard",
    date: "Aug 2022",
    details: "Infosys Certified Professional designation on responsive layouts, modern semantic markup structures, accessibility compliance, and native media formats."
  }
];

const Achievements = () => {
  return (
    <section className="section achievements-section" id="achievements">
      <div className="container">
        <h2 className="section-title text-center">Achievements & Leadership</h2>
        
        <div className="achievements-container">
          <div className="responsibilities-col">
            <div className="subsection-header">
              <div className="sub-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="subsection-title">Positions of Responsibility</h3>
            </div>
            
            <div className="card-list">
              {responsibilities.map((item, index) => (
                <div key={index} className="glass-card responsibility-card">
                  <div className="resp-header">
                    <div>
                      <h4 className="resp-role">{item.role}</h4>
                      <p className="resp-org">{item.organization}</p>
                    </div>
                    <span className="resp-period">{item.period}</span>
                  </div>
                  <p className="resp-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="certificates-col">
            <div className="subsection-header">
              <div className="sub-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              </div>
              <h3 className="subsection-title">Official Certifications</h3>
            </div>
            
            <div className="card-list">
              {certificates.map((cert, index) => (
                <div key={index} className="glass-card cert-card">
                  <div className="cert-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                  </div>
                  
                  <div className="cert-info">
                    <div className="cert-header">
                      <h4 className="cert-title">{cert.title}</h4>
                      <span className="cert-meta">by {cert.issuer} • {cert.date}</span>
                    </div>
                    <p className="cert-details">{cert.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

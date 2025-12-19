
import React from 'react';
import './Achievements.css';

const responsibilities = [
    {
        role: "2nd Runner Up - LTTS Mysore Open Hack 3.0",
        organization: "L&T Technology Services",
        description: "Competed in a 24-hour high-intensity hackathon among 600 participants and 160 teams. Focused on AI, IoT, Cloud, and Vision Analytics to build innovative solutions."
    },
    {
        role: "Management Team Lead - 'Rang-e-Chinar' Cultural Fest",
        organization: "NIT Srinagar",
        description: "Spearheaded crowd management strategies and operations for the highly acclaimed cultural fest, ensuring smooth flow of attendees. Leveraged leadership skills to address challenges and exceed visitor satisfaction."
    },
    {
        role: "College Event Management",
        organization: "NIT Srinagar",
        description: "Managed various types of college events, demonstrating strong organizational and leadership abilities."
    }
];

const certificates = [
    {
        title: "LATEX Certificate",
        issuer: "IIT Bombay",
        date: "Jan 2022",
        details: "Exam conducted by IIT on the basis of LATEX."
    },
    {
        title: "HTML Certificate",
        issuer: "Infosys",
        date: "Aug 2022",
        details: "Infosys Official Citation for Certificate Online Test."
    }
];

const Achievements = () => {
    return (
        <section className="section achievements-section" id="achievements">
            <div className="container">
                <h2 className="section-title text-center">Achievements & Responsibilities</h2>

                <div className="achievements-container">
                    <div className="responsibilities-col">
                        <h3 className="subsection-title">Positions of Responsibility</h3>
                        <div className="card-list">
                            {responsibilities.map((item, index) => (
                                <div key={index} className="card responsibility-card">
                                    <h4 className="resp-role">{item.role}</h4>
                                    <p className="resp-org">{item.organization}</p>
                                    <p className="resp-desc">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="certificates-col">
                        <h3 className="subsection-title">Certifications</h3>
                        <div className="card-list">
                            {certificates.map((cert, index) => (
                                <div key={index} className="card cert-card">
                                    <div className="cert-icon">🏆</div>
                                    <div>
                                        <h4 className="cert-title">{cert.title}</h4>
                                        <span className="cert-issuer">by {cert.issuer}</span>
                                        <span className="cert-date"> • {cert.date}</span>
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

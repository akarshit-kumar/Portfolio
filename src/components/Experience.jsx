
import React from 'react';
import './Experience.css';

const experienceData = [
    {
        company: "L&T Technology Services",
        role: "Engineer",
        period: "Sept 2024 - Present",
        description: "Joined as an Engineer focusing on innovation and technology solutions."
    },
    {
        company: "VERZEO",
        role: "Learner Remote",
        period: "Jan 2023 - Feb 2023",
        description: "I gained valuable experience in Python programming and Machine Learning, culminating in the successful completion of a machine learning project."
    }
];

const Experience = () => {
    return (
        <section className="section experience-section" id="experience">
            <div className="container">
                <h2 className="section-title text-center">Experience</h2>
                <div className="experience-timeline">
                    {experienceData.map((item, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="card timeline-content">
                                <div className="timeline-header">
                                    <h3 className="exp-company">{item.company}</h3>
                                    <span className="exp-period">{item.period}</span>
                                </div>
                                <h4 className="exp-role">{item.role}</h4>
                                <p className="exp-desc">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

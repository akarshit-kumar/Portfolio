
import React from 'react';
import './Education.css';

const educationData = [
    {
        school: "National Institute Of Technology (NIT), Srinagar",
        period: "2020 - 2024",
        degree: "B.Tech in Information Technology and Engineering",
        score: "CGPA: 7.65"
    },
    {
        school: "SP SMART SCHOOL, SARORE",
        period: "2020",
        degree: "JAMMU AND KASHMIR BOARD OF SCHOOL EDUCATION (12th)",
        score: "Percentage: 78.8%"
    },
    {
        school: "S.A.L.E.G SCHOOL, BISHNAH",
        period: "2018",
        degree: "JAMMU AND KASHMIR BOARD OF SCHOOL EDUCATION (10th)",
        score: "Percentage: 73.2%"
    }
];

const Education = () => {
    return (
        <section className="section education-section" id="education">
            <div className="container">
                <h2 className="section-title text-center">Education</h2>
                <div className="education-grid">
                    {educationData.map((item, index) => (
                        <div key={index} className="card education-card">
                            <span className="edu-period">{item.period}</span>
                            <h3 className="edu-school">{item.school}</h3>
                            <p className="edu-degree">{item.degree}</p>
                            <div className="edu-score">{item.score}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

import React from 'react';
import './About.css';
import image from '../images/profile3.jpg';


function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="profile-image">
            <img 
              src={image} 
              alt="Profile" 
            />
          </div>
          <div className="about-text">
            <h3>Hello! I'm a Software Developer</h3>
            <p>
              I'm a passionate software developer with experience in JavaScript 
              and full-stack development. I love building web applications that 
              solve real-world problems.
            </p>
            <p>
              Currently working on healthcare applications and exploring new 
              technologies like React. I enjoy learning and taking on new challenges.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">1+</span>
                <span className="highlight-text">Years Experience</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">3+</span>
                <span className="highlight-text">Projects Completed</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">5+</span>
                <span className="highlight-text">Technologies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

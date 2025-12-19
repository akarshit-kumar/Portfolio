
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <span className="hero-greeting">Hello, I'm</span>
          <h1 className="hero-title">
            <span className="text-gradient">Akarshit Kumar</span>
          </h1>
          <h2 className="hero-subtitle">
            Information Technology Engineer & <br />
            Full Stack Developer
          </h2>
          <p className="hero-description">
            Passionate about building scalable web applications and exploring the depths of Machine Learning. 
            Currently a B.Tech student at NIT Srinagar with a knack for leadership and problem-solving.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        <div className="hero-visual animate-fade-in">
          <div className="visual-circle"></div>
          <div className="visual-circle-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

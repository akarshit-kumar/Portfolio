import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="grid-overlay"></div>

      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <div className="hero-badge-container">
            <span className="status-badge">Engineer at L&T Technology Services</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Akarshit Kumar</span>
          </h1>

          <h2 className="hero-subtitle">
            Full Stack Software Engineer
          </h2>

          <p className="hero-description">
            B.Tech Information Technology graduate from <strong>NIT Srinagar</strong>.
            Designing and deploying robust full-stack applications with React, Spring Boot, GraphQL, and AWS.
            Passionate about building scalable backend services, optimizing data pipelines with Databricks, and resolving real-world challenges.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              Explore Projects
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="https://wa.me/917006137859" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              WhatsApp
            </a>
          </div>

          <div className="hero-social-links">
            <a href="mailto:akarshit1691@gmail.com" title="Email" className="social-icon-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
            <a href="https://github.com/akarshit-kumar" target="_blank" rel="noopener noreferrer" title="GitHub" className="social-icon-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/akarshit-kumar-890aa5244/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="social-icon-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-mesh"></div>
          <div className="visual-glow glow-1"></div>
          <div className="visual-glow glow-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

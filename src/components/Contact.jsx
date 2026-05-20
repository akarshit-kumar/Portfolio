import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <h2 className="section-title text-center">Get In Touch</h2>
        
        <div className="glass-card contact-card animate-fade-in">
          <p className="contact-subtitle">Let's build something remarkable together</p>
          <p className="contact-text">
            I'm currently open to new opportunities, technical collaborations, and software engineering challenges. 
            Whether you have a specific role, a project inquiry, or just want to connect, feel free to drop a message!
          </p>
          
          <div className="contact-options-grid">
            <a href="mailto:akarshit1691@gmail.com" className="contact-option-item">
              <div className="option-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <span className="option-label">Email Me</span>
              <span className="option-value">akarshit1691@gmail.com</span>
            </a>
            
            <a href="https://wa.me/917006137859" target="_blank" rel="noopener noreferrer" className="contact-option-item">
              <div className="option-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </div>
              <span className="option-label">WhatsApp Chat</span>
              <span className="option-value">+91 70061 37859</span>
            </a>
            
            <a href="tel:+917006137859" className="contact-option-item">
              <div className="option-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <span className="option-label">Direct Call</span>
              <span className="option-value">+91 70061 37859</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

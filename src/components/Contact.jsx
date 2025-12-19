
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <h2 className="section-title text-center">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-text text-center">
            Currently looking for new opportunities. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
          <div className="text-center">
            <a href="https://wa.me/917006137859" target="_blank" rel="noopener noreferrer" className="btn btn-primary contact-btn">Say Hello on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

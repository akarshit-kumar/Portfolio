
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p className="copyright">
          Designed & Built by <span className="text-gradient">Akarshit Kumar</span>
        </p>
        <p className="footer-sub">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

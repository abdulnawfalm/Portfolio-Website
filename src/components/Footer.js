import React from 'react';
import './Footer.css'; 

const Footer = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <footer className="footer">
      <div className="left" onClick={refreshPage}>
        Code by Nawfal
      </div>
      <nav className="right">
        <a href="#about">About</a>
        <span className="separator">|</span>
        <a href="#work">Work</a>
        <span className="separator">|</span>
        <a href="#skills">Skills</a>
        <span className="separator">|</span>
        <a href="/resume.pdf" download="Nawfal_Resume.pdf">Resume</a>
        <span className="separator">|</span>
        <a href="#contact">Contact</a>
      </nav>
    </footer>
  );
};

export default Footer;

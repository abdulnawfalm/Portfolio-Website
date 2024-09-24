import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = scrollPosition > currentScrollPos || currentScrollPos < 10;
    setScrollPosition(currentScrollPos);
    setIsVisible(visible);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
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
    </header>
  );
};

export default Header;

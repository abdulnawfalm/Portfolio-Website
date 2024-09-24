import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">UI/UX Designer & Front End Develoepr</h1>
        <p className="hero-description">
          A passionate Front end developer focused on crafting clean interface, User Experience & efficient code.
        </p>
        <a href="#work" className="hero-button">See My Work</a>
      </div>
    </section>
  );
};

export default HeroSection;

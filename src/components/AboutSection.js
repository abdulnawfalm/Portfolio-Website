import React, { useEffect, useState } from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } 
    );

    const aboutSection = document.querySelector('.about');
    if (aboutSection) observer.observe(aboutSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);

  return (
    <section className={`about ${isVisible ? 'animate' : ''}`} id="about">
      <div className="about-content">
        <h2 className="about-heading">About Me</h2>
        <div className="about-text">
          <p className="about-description">
            A passionate UI/UX Designer with 7 months hands-on Experience in creating user centered designs for both web & mobile platforms. my expertise clean UI design, user experience design and solve complex problems. proficient tools like Figma, Adobe XD, Illustrator, wireframes & Prototyping. I design and develop visually stunning and intuitive websites and apps. Eager to embrace new challenges, I continuously seek opportunities to learn, grow, and refine my skills as a design and development professionally.
          </p>
          <div className="about-experience">
            <p><strong>Experience:</strong> 09 Months</p>
            <p><strong>Projects Completed:</strong> 5+</p>
            <p><strong>Satisfaction:</strong> 80%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

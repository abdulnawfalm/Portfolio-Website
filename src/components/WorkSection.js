import React, { useEffect, useState } from 'react';
import './WorkSection.css';

import project1 from './assets/project1.jpg';
import project2 from './assets/project2.jpg';
import project3 from './assets/project3.jpg';
import project4 from './assets/project4.jpg';

const WorkSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const workSection = document.querySelector('.work');
    if (workSection) observer.observe(workSection);

    return () => {
      if (workSection) observer.unobserve(workSection);
    };
  }, []);

  return (
    <section className="work" id="work">
      <h2 className="work-heading">Recent Works</h2>
      <div className={`work-grid ${isVisible ? 'animate' : ''}`}>
        {/* Project 1 */}
        <div className={`work-item ${isVisible ? 'left' : ''}`}>
          <img src={project1} alt="Project 1" />
          <div className="project-title">Product mobile app design</div>
        </div>
        
        {/* Project 2 */}
        <div className={`work-item ${isVisible ? 'right' : ''}`}>
          <img src={project2} alt="Project 2" />
          <div className="project-title">Banking Dashboard design</div>
        </div>
        
        {/* Project 3 */}
        <div className={`work-item ${isVisible ? 'left' : ''}`}>
          <img src={project3} alt="Project 3" />
          <div className="project-title">E-commerce Website</div>
        </div>
        
        {/* Project 4 */}
        <div className={`work-item ${isVisible ? 'right' : ''}`}>
          <img src={project4} alt="Project 4" />
          <div className="project-title">Product Website</div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;

import React from 'react';
import './IconSkills.css';


import figmaIcon from './assets/figma-icon.png';
import adobeXdIcon from './assets/adobe-xd-icon.png';
import illustratorIcon from './assets/illustrator-icon.png';
import htmlIcon from './assets/html-icon.png';
import cssIcon from './assets/css-icon.png';
import jsIcon from './assets/js-icon.png';
import reactIcon from './assets/react-icon.png';
import webflowIcon from './assets/webflow-icon.png';
import framerIcon from './assets/framer-icon.png';
import gitIcon from './assets/git-icon.png';
import openAiIcon from './assets/openai-icon.png';
import vscodeIcon from './assets/vscode-icon.png';
import nextJsIcon from './assets/nextjs-icon.png';

const IconSkills = () => {
  const skills = [
    { name: 'Figma', imgSrc: figmaIcon },
    { name: 'Adobe XD', imgSrc: adobeXdIcon },
    { name: 'Illustrator', imgSrc: illustratorIcon },
    { name: 'HTML', imgSrc: htmlIcon },
    { name: 'CSS', imgSrc: cssIcon },
    { name: 'JavaScript', imgSrc: jsIcon },
    { name: 'React', imgSrc: reactIcon },
    { name: 'Webflow', imgSrc: webflowIcon },
    { name: 'Framer', imgSrc: framerIcon },
    { name: 'Git & GitHub', imgSrc: gitIcon },
    { name: 'OpenAI', imgSrc: openAiIcon },
    { name: 'VS Code', imgSrc: vscodeIcon },
    { name: 'Next.js', imgSrc: nextJsIcon },
  ];

  return (
    <section className="icon-skills" id="icon-skills">
      <h2 className="icon-skills-heading">Skills</h2>
      <div className="icon-skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="icon-skill-item">
            <img src={skill.imgSrc} alt={skill.name} className="skill-icon" />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IconSkills;

// src/components/About.js

import React from 'react';
import '../About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>
        Hello! I'm Derrick Johnson, a Front End Web Developer specializing in creating interactive and user-friendly interfaces using modern web technologies.
      </p>
      <h3>Skills</h3>
      <ul>
        <li>JavaScript (ES6+)</li>
        <li>React.js</li>
        <li>HTML5 & CSS3</li>
        <li>Responsive Design</li>
      </ul>
    </div>
  );
};

export default About;

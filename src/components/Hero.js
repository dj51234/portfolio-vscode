// src/components/Hero.js

import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import CodeRain from './CodeRain';
import '../Hero.css';

const Hero = ({ onScrollDown }) => {
  const firstName = 'DERRICK';
  const lastName = 'JOHNSON';

  return (
    <div className="hero-container">
      <CodeRain />
      <div className="hero-content">
        <h1 className="hero-title">
          <div className="name-container">
            {firstName.split('').map((letter, index) => (
              <span key={`first-${index}`} className="name-letter">
                {letter}
              </span>
            ))}
          </div>
          <div className="name-container">
            {lastName.split('').map((letter, index) => (
              <span key={`last-${index}`} className="name-letter">
                {letter}
              </span>
            ))}
          </div>
        </h1>
        <div className="hero-subtitle-container">
          <h2 className="hero-subtitle">Front End Web Developer</h2>
        </div>
        {/* Scroll-down arrow */}
        <div className="scroll-down-arrow" onClick={onScrollDown}>
          <FaChevronDown />
        </div>
      </div>
    </div>
  );
};

export default Hero;

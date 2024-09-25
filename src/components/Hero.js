// Hero.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../Hero.css';

const Hero = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth - 250, // Subtracting sidebar width
        height: window.innerHeight,
      });
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fullName = "DERRICKJOHNSON".split("");

  const letterColors = [
    'var(--neon-blue)',
    'var(--neon-pink)',
    'var(--neon-green)',
    'var(--neon-yellow)',
    'var(--neon-orange)'
  ];

  return (
    <div className="hero-container" style={{ width: dimensions.width, height: dimensions.height }}>
      <div className="retro-grid"></div>
      <div className="hero-content">
        <motion.h1 className="hero-title">
          <div className="name-container">
            {fullName.map((letter, index) => (
              <motion.span
                key={`name-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="name-letter"
                style={{ 
                  color: letterColors[index % letterColors.length],
                  textShadow: `0 0 10px ${letterColors[index % letterColors.length]}`,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Front End Web Developer
        </motion.p>
      </div>
      <div className="ship-container">
        <div className="ship"></div>
      </div>
      <div className="pixel-art pixel-art-1"></div>
      <div className="pixel-art pixel-art-2"></div>
    </div>
  );
};

export default Hero;
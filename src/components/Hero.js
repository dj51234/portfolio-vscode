import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../Hero.css';

const CodeRain = () => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        setDimensions({
          width: canvasRef.current.offsetWidth,
          height: canvasRef.current.offsetHeight
        });
      }
    };

    window.addEventListener('resize', updateDimensions);
    updateDimensions();

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const symbols = ['<>', '/>', '{}', '[]', '()', ';', '==', '=>', '&&', '||', '!=', '+=', '-=', '*=', '/=', '...'];
    const columns = Math.floor(canvas.width / 20);
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(18, 18, 18, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#24ABF2';
      ctx.font = '15px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = symbols[Math.floor(Math.random() * symbols.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    return () => clearInterval(interval);
  }, [dimensions]);

  return <canvas ref={canvasRef} className="code-rain" />;
};

const Hero = () => {
  const firstName = "DERRICK";
  const lastName = "JOHNSON";

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
      </div>
    </div>
  );
};

export default Hero;
// src/components/CodeRain.js

import React, { useEffect, useRef, useState } from 'react';
import '../CodeRain.css';

const CodeRain = () => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        setDimensions({
          width: canvasRef.current.offsetWidth,
          height: canvasRef.current.offsetHeight,
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

    const symbols = [
      '<>',
      '/>',
      '{}',
      '[]',
      '()',
      ';',
      '==',
      '=>',
      '&&',
      '||',
      '!=',
      '+=',
      '-=',
      '*=',
      '/=',
      '...',
    ];
    const fontSize = 20;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(18, 18, 18, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#24ABF2';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = symbols[Math.floor(Math.random() * symbols.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
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

export default CodeRain;

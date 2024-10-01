import React, { useEffect, useRef } from 'react';

const TextFormingCodeRain = ({ text, onComplete }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const symbols = '<>/{}[]();==>&||!=+-*/...'.split('');
    const fontSize = 20;
    const letters = text.split('');
    const letterPositions = letters.map((_, index) => ({
      x: (index * fontSize) + (canvas.width - text.length * fontSize) / 2,
      y: -fontSize,
      targetY: canvas.height / 2
    }));

    let animationComplete = false;

    const animate = () => {
      ctx.fillStyle = 'rgba(18, 18, 18, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#24ABF2';
      ctx.font = `${fontSize}px monospace`;

      let allLettersInPlace = true;

      letterPositions.forEach((pos, index) => {
        if (pos.y < pos.targetY) {
          pos.y += 2;
          allLettersInPlace = false;
          ctx.fillText(symbols[Math.floor(Math.random() * symbols.length)], pos.x, pos.y);
        } else {
          ctx.fillText(letters[index], pos.x, pos.y);
        }
      });

      if (allLettersInPlace && !animationComplete) {
        animationComplete = true;
        onComplete();
      }

      if (!animationComplete) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [text, onComplete]);

  return <canvas ref={canvasRef} className="text-forming-code-rain" width={window.innerWidth} height={window.innerHeight} />;
};

export default TextFormingCodeRain;
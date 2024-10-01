// src/App.js

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
// Import additional components as needed

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartY, setTouchStartY] = useState(null);
  const [direction, setDirection] = useState(0);

  const sections = [
    <Hero key="hero" />,
    <About key="about" />,
    <Projects key="projects" />,
    // Add more sections here
  ];

  const handleWheel = (event) => {
    event.preventDefault();
    if (isAnimating) return;

    if (event.deltaY > 0 && currentSection < sections.length - 1) {
      // Scroll down
      setDirection(1);
      setIsAnimating(true);
      setCurrentSection((prev) => prev + 1);
    } else if (event.deltaY < 0 && currentSection > 0) {
      // Scroll up
      setDirection(-1);
      setIsAnimating(true);
      setCurrentSection((prev) => prev - 1);
    }
  };

  const handleTouchStart = (event) => {
    setTouchStartY(event.touches[0].clientY);
  };

  const handleTouchMove = (event) => {
    if (touchStartY === null || isAnimating) return;

    const touchCurrentY = event.touches[0].clientY;
    const deltaY = touchStartY - touchCurrentY;

    if (deltaY > 50 && currentSection < sections.length - 1) {
      // Swipe up
      setDirection(1);
      setIsAnimating(true);
      setCurrentSection((prev) => prev + 1);
      setTouchStartY(null);
    } else if (deltaY < -50 && currentSection > 0) {
      // Swipe down
      setDirection(-1);
      setIsAnimating(true);
      setCurrentSection((prev) => prev - 1);
      setTouchStartY(null);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [currentSection, isAnimating]);

  const variants = {
    enter: (direction) => ({
      y: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      y: '0%',
      opacity: 1,
    },
    exit: (direction) => ({
      y: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  return (
    <div className="app-container">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={currentSection}
          className="section"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7 }}
          onAnimationComplete={handleAnimationComplete}
        >
          {sections[currentSection]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;

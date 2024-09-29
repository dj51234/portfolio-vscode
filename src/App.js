import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import About from './components/About';
import Hero from './components/Hero';

const pageVariants = {
  initial: { x: '100%', opacity: 0 },
  in: { x: 0, opacity: 1 },
  out: { x: '-100%', opacity: 0 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.7
};

function App() {
  const [activeComponent, setActiveComponent] = useState('hero');
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    // Set isInitialRender to false after the component mounts
    setIsInitialRender(false);
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'about':
        return <About />;
      case 'hero':
      default:
        return <Hero />;
    }
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className='app-container'>
      <Header />
      <div className={`main-container ${isSidebarVisible ? '' : 'sidebar-hidden'}`}>
        <Sidebar
          setActiveComponent={setActiveComponent}
          isVisible={isSidebarVisible}
          toggleSidebar={toggleSidebar}
        />
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeComponent}
            initial={isInitialRender ? false : "initial"}
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className='content-container'
          >
            {renderComponent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
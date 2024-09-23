// AboutCode.js
export const aboutCodeString = `// About.js
import React, { useState, useEffect, useRef } from 'react';
import { AlertCircle, Code, Eye, Terminal as TerminalIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { aboutCodeString } from './AboutCode';
import '../About.css';

const CustomAlert = ({ children }) => (
  <div className="custom-alert" role="alert">
    <div className="alert-content">
      <AlertCircle className="alert-icon" />
      <p>{children}</p>
    </div>
  </div>
);

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(['Welcome to my interactive terminal!', 'Type "help" for available commands.']);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    setOutput([...output, "> {input}"]);
    processCommand(input);
    setInput('');
  };

  const processCommand = (cmd) => {
    switch (cmd.toLowerCase()) {
      case 'help':
        setOutput(prev => [...prev, 'Available commands: help, about, clear']);
        break;
      case 'about':
        setOutput(prev => [...prev, "I'm a passionate developer who loves creating intuitive and efficient solutions."]);
        break;
      case 'clear':
        setOutput([]);
        break;
      default:
        setOutput(prev => [...prev, "Command not recognized: {cmd}"]);
    }
  };

  return (
    <div className="terminal">
      <div className="terminal-output">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <form onSubmit={handleInputSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type a command..."
        />
      </form>
    </div>
  );
};

const AboutSection = () => {
  const [isCodeView, setIsCodeView] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalHeight, setTerminalHeight] = useState(200); // Initial height
  const [typedText, setTypedText] = useState('');
  const fullText = "Hello! I'm a passionate developer with";

  const minHeight = 100; // Minimum terminal height in px
  const maxHeight = 600; // Maximum terminal height in px

  const dragging = useRef(false);
  const startY = useRef(0);
  const startHeight = useRef(terminalHeight);

  useEffect(() => {
    if (!isCodeView) {
      const timer = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [typedText, isCodeView]);

  const toggleView = () => {
    setIsCodeView(!isCodeView);
  };

  const toggleTerminal = () => {
    setIsTerminalOpen(!isTerminalOpen);
    if (!isTerminalOpen) {
      setTerminalHeight(200); // Reset to initial height when opening
    }
  };

  const CodeView = () => (
    <SyntaxHighlighter 
      language="jsx"
      showLineNumbers={true}
      style={vscDarkPlus} 
      className="code-view"
    >
      {aboutCodeString}
    </SyntaxHighlighter>
  );

  const RenderedView = () => (
    <div className="rendered-view">
      <h2>{typedText}</h2>
      <div className="grid-container">
        <div className="grid-item">
          <h3>Skills</h3>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>GraphQL</li>
          </ul>
        </div>
        <div className="grid-item">
          <h3>Experience</h3>
          <ul>
            <li>Senior Developer at TechCorp</li>
            <li>Lead Frontend at StartupX</li>
            <li>Freelance Web Developer</li>
          </ul>
        </div>
      </div>
      <CustomAlert>
        Fun Fact: I once debugged a production issue while skydiving! (Not recommended)
      </CustomAlert>
    </div>
  );

  // Event Handlers for Dragging
  const handleMouseDown = (e) => {
    dragging.current = true;
    startY.current = e.clientY;
    startHeight.current = terminalHeight;

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!dragging.current) return;
    const deltaY = startY.current - e.clientY;
    let newHeight = startHeight.current + deltaY;
    if (newHeight < minHeight) newHeight = minHeight;
    if (newHeight > maxHeight) newHeight = maxHeight;
    setTerminalHeight(newHeight);
  };

  const handleMouseUp = () => {
    dragging.current = false;
    // Remove event listeners
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  // Optional: Handle touch events for mobile compatibility
  const handleTouchStart = (e) => {
    dragging.current = true;
    startY.current = e.touches[0].clientY;
    startHeight.current = terminalHeight;

    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
  };

  const handleTouchMove = (e) => {
    if (!dragging.current) return;
    const deltaY = startY.current - e.touches[0].clientY;
    let newHeight = startHeight.current + deltaY;
    if (newHeight < minHeight) newHeight = minHeight;
    if (newHeight > maxHeight) newHeight = maxHeight;
    setTerminalHeight(newHeight);
  };

  const handleTouchEnd = () => {
    dragging.current = false;
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
  };

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
        <div className="header-buttons">
          <button onClick={toggleView} className="toggle-button">
            {isCodeView ? <Eye className="button-icon" /> : <Code className="button-icon" />}
            <span>{isCodeView ? 'Preview' : 'Code'}</span>
          </button>
          <button onClick={toggleTerminal} className="toggle-button">
            <TerminalIcon className="button-icon" />
            <span>Terminal</span>
          </button>
        </div>
      </div>
      <div className="content-wrapper" style={{ paddingBottom: isTerminalOpen ? {terminalHeight}px : '0' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={isCodeView ? 'code' : 'preview'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="content-container"
          >
            {isCodeView ? <CodeView /> : <RenderedView />}
          </motion.div>
        </AnimatePresence>
      </div>
      {isTerminalOpen && (
        <div 
          className="terminal-container" 
          style={{ height: {terminalHeight}px }}
        >
          <div 
            className="terminal-handle"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          ></div>
          <Terminal />
        </div>
      )}
    </div>
  );
};

export default AboutSection;
`;
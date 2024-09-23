import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import About from './components/About';

function App() {
  const [activeComponent, setActiveComponent] = useState('about');

  return (
    <div className='app-container'>
      <Header />
      <div className='main-container'>
        <Sidebar />
        <About />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  

  return (
    <>
      <Header />
      <div className='main-container'>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
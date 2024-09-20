// src/components/Sidebar.js
import React from 'react';
import '../Sidebar.css';
import files from '../assets/files.svg'
import about from '../assets/about.svg'
import skills from '../assets/skills.svg'
import resume from '../assets/resume.svg'
import contact from '../assets/contact.svg'
import { Tooltip } from 'react-tooltip'

const Sidebar = () => {
  

  return (
    <div className="sidebar">
      <div className="sidebar_thin">
        <ul className='sidebar_thin--icons'>
          <a data-tooltip-id="my-tooltip" data-tooltip-offset="0" data-tooltip-content="About"><Tooltip id="my-tooltip" /><li><span className='bar'></span><img src={about} alt="about"></img></li></a>
          <a data-tooltip-id="my-tooltip" data-tooltip-offset="0" data-tooltip-content="Projects"><li><span className='bar'></span><img src={files} alt="projects"></img></li></a>
          <a data-tooltip-id="my-tooltip" data-tooltip-offset="0" data-tooltip-content="Skills"><li><span className='bar'></span><img src={skills} alt="skills"></img></li></a>
          <a data-tooltip-id="my-tooltip" data-tooltip-offset="0" data-tooltip-content="Resume"><li><span className='bar'></span><img src={resume} alt="resume"></img></li></a>
          <a data-tooltip-id="my-tooltip" data-tooltip-offset="0" data-tooltip-content="Contact"><li><span className='bar'></span><img src={contact} alt="contact"></img></li></a>
        </ul>
      </div>
      <div className="sidebar_main hidden">
        <div className='sidebar_main--header'>
          <h4>EXPLORER</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

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
          <Tooltip id="my-tooltip" />
          <a data-tooltip-id="my-tooltip" data-tooltip-delay-show={500} data-tooltip-offset="0" data-tooltip-content="About" data-tooltip-place="right"><li><span className='bar'></span><img src={about} alt="about"></img></li></a>
          <a data-tooltip-id="my-tooltip" data-tooltip-delay-show={500} data-tooltip-offset="0" data-tooltip-content="Projects" data-tooltip-place="right"><li><span className='bar'></span><img src={files} alt="projects"></img></li></a>
          <a data-tooltip-id="my-tooltip" data-tooltip-delay-show={500} data-tooltip-offset="0" data-tooltip-content="My Skills" data-tooltip-place="right"><li><span className='bar'></span><img src={skills} alt="skills"></img></li></a>
          <a data-tooltip-id="my-tooltip" data-tooltip-delay-show={500} data-tooltip-offset="0" data-tooltip-content="Resume" data-tooltip-place="right"><li><span className='bar'></span><img src={resume} alt="resume"></img></li></a>
          <a data-tooltip-id="my-tooltip" data-tooltip-delay-show={500} data-tooltip-offset="0" data-tooltip-content="Contact" data-tooltip-place="right"><li><span className='bar'></span><img src={contact} alt="contact"></img></li></a>
        </ul>
      </div>
      <div className="sidebar_main visible">
        <div className='sidebar_main--header'>
          <h4>EXPLORER</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

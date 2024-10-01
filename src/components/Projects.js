// src/components/Projects.js

import React from 'react';
import '../Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Project One',
    image: 'https://via.placeholder.com/300x200',
    description: 'Description for project one.',
    link: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    image: 'https://via.placeholder.com/300x200',
    description: 'Description for project two.',
    link: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    image: 'https://via.placeholder.com/300x200',
    description: 'Description for project three.',
    link: '#',
  },
  {
    id: 4,
    title: 'Project Four',
    image: 'https://via.placeholder.com/300x200',
    description: 'Description for project four.',
    link: '#',
  },
  {
    id: 5,
    title: 'Project Five',
    image: 'https://via.placeholder.com/300x200',
    description: 'Description for project five.',
    link: '#',
  },
  {
    id: 6,
    title: 'Project Six',
    image: 'https://via.placeholder.com/300x200',
    description: 'Description for project six.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-content">
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

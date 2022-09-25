import React from 'react';

import './index.scss';
import image from '../../assets/images/logo1.png';

function ProjectCard({ link, title, projectDescription }) {
  return (
    <div className="project-card-container" title={title}>
      <a href={link || '#'}>
        <img src={image} alt={title} />

        <div className="project-card-info">
          <h3>{title}</h3>

          <p>{projectDescription}</p>
          <div> {'>'} Click For more Info</div>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;

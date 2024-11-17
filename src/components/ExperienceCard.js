import React from 'react';
import '../styles/ExperienceCard.css';

const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience-card">
      <h3>{experience.title}</h3>
      <h4>{experience.company}</h4>
      <p>{experience.duration}</p>
      <p>{experience.description}</p>
    </div>
  );
};

export default ExperienceCard;

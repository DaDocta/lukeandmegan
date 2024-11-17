import React from 'react';
import '../styles/SkillsCard.css';

const SkillsCard = ({ skill }) => {
  return (
    <div className="skills-card">
      <h3>{skill.name}</h3>
      <p>Level: {skill.level}</p>
    </div>
  );
};

export default SkillsCard;

import React from 'react';
import SkillsCard from '../components/SkillsCard';
import './Skills.css';

const skills = [
  { name: 'Mechanics', level: 'Advanced' },
  { name: 'Leadership', level: 'Advanced' },
  { name: 'Troubleshooting', level: 'Advanced' },
  { name: 'Drone Photography', level: 'Intermediate' },
  { name: 'Construction', level: 'Intermediate' },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map(skill => (
          <SkillsCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

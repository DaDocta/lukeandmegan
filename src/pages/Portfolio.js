import React, { useEffect } from 'react';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import '../styles/Portfolio.css';

const Portfolio = () => {
  useEffect(() => {
    const newUrl = "https://megancalme.site/portfolio";
    window.history.pushState(null, '', newUrl);
  }, []);

  return (
    <div className="portfolio-page">
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
};

export default Portfolio;

import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to Lucas Fedders' Portfolio</h1>
        <p>
          Hi, I'm Lucas Fedders, a problem solver, leader, and aspiring business major. 
          I bring my experience from being a varsity soccer player, go-kart mechanic, and leader in Young Life.
        </p>
        <a href="/portfolio" className="portfolio-link">View My Portfolio</a>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import PropTypes from 'prop-types';
import './Hero.css'

export const HeroSection = ({ title, description, backgroundImage }) => {
  return (
    <div 
      className="heroSection"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="heroOverlay">
        <h1 className="hero-title caesar text-4xl md:text-6xl font-bold">{title}</h1>
        <p className="hero-sub mont mt-2 text-lg md:text-xl">{description}</p>
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired
};


import React from 'react';

const ServiceCard = ({ imageUrl, title, subtitle, paragraph, link }) => {
  return (
    <div className="service-card">
      <div className="service-card-image-container">
        <a href={link}>
          <img src={imageUrl} alt={title} />
        </a>
      </div>
      <div className="service-card-content">
        <h2 className="service-card-title">{title}</h2>
        <h3 className="service-card-subtitle">{subtitle}</h3>
        <p className="service-card-paragraph">{paragraph}</p>
      </div>
    </div>
  );
};

export {ServiceCard};
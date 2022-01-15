import React from 'react';
import './feature.css';

const Feature = ({ title, text, img }) => (
  <div className="gpt3__features-container__feature">
    <img
      className="gpt3__features-container__feature-img"
      src={img}
      alt="Logo"
    />
    <div className="gpt3__features-container__feature-title">
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;

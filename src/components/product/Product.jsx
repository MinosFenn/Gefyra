import React from 'react';
import './product.css';

const Product = ({ title, text, img }) => (
  <div className="gefyra__features-container__feature">
    <img
      className="gefyra__features-container__feature-img"
      src={img}
      alt="Logo"
    />
    <div className="gefyra__features-container__feature-title">
      <h1>{title}</h1>
    </div>
    <div className="gefyra__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Product;

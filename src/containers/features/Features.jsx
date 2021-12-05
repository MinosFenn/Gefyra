import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'IDO',
    text: ' Initial Decentralized Offerings allowing crypto-projects to issue tokens through our platform.',
  },
  {
    title: 'STO',
    text: 'Security Token Offerings enhances token issuance for security through money-raising for companies (Debt, Equity, Hybrid)',
  },
];

export default function Features() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 data-aos="fade-down" className="gradient__text">
          Gefyra products are designed to bridge the crypto-world with
          traditional finance : stake $GEFYRA token to participate in the best
          money-raising
        </h1>
        <p>Introduction to products</p>
      </div>
      <div data-aos="zoom-in-left" className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
}

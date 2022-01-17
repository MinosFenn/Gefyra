import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    img: '',
    title: 'IDO',
    text: ' Initial Decentralized Offerings allowing crypto-projects to issue tokens through our platform.',
  },
  {
    img: '../../assets/correntin.PNG',

    title: 'STO',
    text: 'Security Token Offerings enhances token issuance for security through money-raising for companies (Debt, Equity, Hybrid)',
  },
  {
    img: '../../assets/correntin.PNG',

    title: 'Defi Pool',
    text: 'DeFi Investment products with Gefyra pool, liquidity pool and investment pool.',
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
          Our products
        </h1>
        <p>To leverage on DeFi</p>
      </div>
      <div data-aos="zoom-in-left" className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            img={item.img}
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
}

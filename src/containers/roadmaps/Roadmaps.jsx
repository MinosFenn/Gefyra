import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './roadmaps.css';
import Roadmap from '../../components/roadmap/Roadmap';

const featuresData = [
  {
    title: 'Q1',
    text: 'Gefyra creation & MVP released    ',
  },
  {
    title: 'Q2',
    text: 'ICO & Beta released    ',
  },
  {
    title: 'Q3',
    text: 'First security token emission    ',
  },
  {
    title: 'Q4',
    text: 'TBD',
  },
];

export default function Roadmaps() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="gpt3__features section__padding" id="roadmap">
      <div className="gpt3__features-heading">
        <h1 data-aos="fade-down" className="gradient__text">
          Our roadmap
        </h1>
        <p>To leverage on DeFi</p>
      </div>
      <div data-aos="zoom-in-left" className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Roadmap
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
}

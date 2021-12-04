import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

export default function Possibility() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div data-aos="fade-down" className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div data-aos="fade-up" className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are <br /> beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}

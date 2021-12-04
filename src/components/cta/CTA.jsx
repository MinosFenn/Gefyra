import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './cta.css';

export default function CTA() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div data-aos="fade-left" className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Register Today & start exploring the endless possibilities.</h3>
      </div>
      <div className="gpt3__cta-btn">
        <button type="button">Get Started</button>
      </div>
    </div>
  );
}

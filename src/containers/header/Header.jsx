import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import people from '../../assets/people.png';
import logo from '../../assets/GEFYRA-Custom logo animation-FHD.mp4';
import './header.css';

export default function Header() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="gef__header section__padding" id="home">
      <div data-aos="zoom-in-down" className="gef__header-content">
        <h1 className="gradient__text">Bridge Traditional Finance with DeFi</h1>
        <p>
          Gefyra is a web 3.0 platform improving interaction of the traditional
          economy with decentralized finance, increasing opportunities for
          investors, reducing the cost of fundraising and broadening the sources
          of financing for companies.
        </p>

        {/* <div className="gef__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gef__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
      </div>
      <div data-aos="zoom-out-left" className="gef__header-image">
        <video autoPlay muted>
          <track kind="captions" />
          <source src={logo} track kind="captions" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

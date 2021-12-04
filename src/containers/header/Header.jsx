import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import people from '../../assets/people.png';
import logo from '../../assets/logo/Gefyra-06.png';
import './header.css';

export default function Header() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="gef__header section__padding" id="home">
      <div data-aos="zoom-in-down" className="gef__header-content">
        <h1 className="gradient__text">
          Let&apos;s Build Something amazing with Gefyra
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
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
        <img src={logo} />
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import possibilityImage from '../../assets/img-nft.PNG';
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
        {/* <h4>The</h4> */}
        <h1 className="gradient__text">$Gefyra token</h1>
        <p>
          $GEFYRA is the utility token of Gefyra platform. Investors are able to
          buy $GEFYRA with crypto and fiat money and stake our token in listed
          Gefyra laucnhpool to participate in the best fundraisings.
        </p>
      </div>
    </div>
  );
}

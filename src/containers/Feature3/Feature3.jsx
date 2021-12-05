import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import possibilityImage from '../../assets/img-nft.PNG';
import './Feature3.css';

export default function Feature3() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div data-aos="fade-down" className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div data-aos="fade-up" className="gpt3__possibility-content">
        {/* <h4>NFT</h4> */}
        <h1 className="gradient__text">NFT </h1>
        <p>
          • Gefyra platform is unique by creating for the first time a
          participation ticket represented by an ephemary and exchangeable NTF
          obtained by stacking and locking Gefyra token.
          <br />
          <br /> • Once this NFT is obtained investors have a short lapse of
          time to sell it on the OTC secondary market; or either keep it in
          Gefyra wallet. <br />
          <br />• When the selling period ends all NFT are burned : validating
          the allocation to the fundraising for those who own a ticket. <br />
          <br />• Unique and rare NFT symbols are represented on Gefyra
          investors profiles when a token raising is completed.
        </p>
      </div>
    </div>
  );
}

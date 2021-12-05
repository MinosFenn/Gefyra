import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import possibilityImage from '../../assets/img-nft.PNG';
import './Feature2.css';

export default function Feature2() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div data-aos="fade-up" className="gpt3__possibility-content">
        {/* <h4>Request Early Access to Get Started</h4> */}
        <h1 className="gradient__text">Launchpad Mecanism</h1>
        <p>
          • Gefyra team of analysts make sure that all project applications are
          submitted to a complete business review and on-boarding process
          aligned with our community standards and values in order to be
          whitelisted on the platform.
          <br />
          <br /> • Whitelisted projects design the best token-offerings using
          Gefyra products by customizing their unique tokenomics and fundraising
          milestones. Once the structuring is completed, projects are listed
          among the gefyra launchpool offerings available to our community.
          <br />
          <br />• Buy and Stake $GEFYRA in any of our projects launchpool to
          draw a chance to participate in token sales thanks to our NFT
          allocation ticket mechanism.
          <br />
          <br />• Stackers receive an ephemeral NFT allocation ticket issued
          until fundraising milestones are reached, then the NFT allocation
          ticket is burned, and tokens are issued to investors in exchange of
          cash to the company.
        </p>
      </div>
      <div data-aos="fade-down" className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
    </div>
  );
}

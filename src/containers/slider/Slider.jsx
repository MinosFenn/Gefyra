import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.min.css';

import './slider.css';

export default function Feature2() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <Swiper className="swiper-slide">
      <div className="swiper">
        {' '}
        <div className="gpt3__possibility section__padding" id="possibility">
          <div data-aos="fade-down" className="gpt3__possibility-card">
            slider1{' '}
          </div>
          <div data-aos="fade-up" className="gpt3__possibility-content">
            {/* <h4>The</h4> */}
            <h1 className="gradient__text">$Gefyra token</h1>
            <p>
              $GEFYRA is the utility token of Gefyra platform. Investors are
              able to buy $GEFYRA with crypto and fiat money and stake our token
              in listed Gefyra laucnhpool to participate in the best
              fundraisings.
            </p>
          </div>
        </div>
      </div>
      <div className="swiper">
        {' '}
        <div className="gpt3__possibility section__padding" id="possibility">
          <div data-aos="fade-up" className="gpt3__possibility-content">
            {/* <h4>Request Early Access to Get Started</h4> */}
            <h1 className="gradient__text">Launchpad Mecanism</h1>
            <p>
              • Gefyra team of analysts make sure that all project applications
              are submitted to a complete business review and on-boarding
              process aligned with our community standards and values in order
              to be whitelisted on the platform.
              <br />
              <br /> • Whitelisted projects design the best token-offerings
              using Gefyra products by customizing their unique tokenomics and
              fundraising milestones. Once the structuring is completed,
              projects are listed among the gefyra launchpool offerings
              available to our community.
              <br />
              <br />• Buy and Stake $GEFYRA in any of our projects launchpool to
              draw a chance to participate in token sales thanks to our NFT
              allocation ticket mechanism.
              <br />
              <br />• Stackers receive an ephemeral NFT allocation ticket issued
              until fundraising milestones are reached, then the NFT allocation
              ticket is burned, and tokens are issued to investors in exchange
              of cash to the company.
            </p>
          </div>
          <div data-aos="fade-down" className="gpt3__possibility-image">
            slider 2
          </div>
        </div>
      </div>
      <div className="swiper">
        {' '}
        <div className="gpt3__possibility section__padding" id="possibility">
          <div data-aos="fade-down" className="gpt3__possibility-image">
            <p>test</p>{' '}
          </div>
          <div data-aos="fade-up" className="gpt3__possibility-content">
            {/* <h4>NFT</h4> */}
            <h1 className="gradient__text">NFT </h1>
            <p>
              • Gefyra platform is unique by creating for the first time a
              participation ticket represented by an ephemary and exchangeable
              NTF obtained by stacking and locking Gefyra token.
              <br />
              <br /> • Once this NFT is obtained investors have a short lapse of
              time to sell it on the OTC secondary market; or either keep it in
              Gefyra wallet. <br />
              <br />• When the selling period ends all NFT are burned :
              validating the allocation to the fundraising for those who own a
              ticket. <br />
              <br />• Unique and rare NFT symbols are represented on Gefyra
              investors profiles when a token raising is completed.
            </p>
          </div>
        </div>
      </div>
      <div className="swiper">Slide 5</div>
      <div className="swiper">Slide 2</div>
    </Swiper>
  );
}

import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './community.css';
import community from '../../assets/iso/community.PNG';

export default function Community() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="gpt3__whatgpt3 section__margin"
      id="community"
    >
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">Community</h1>
        <p>To shape your investment experience</p>
      </div>
      <div data-aos="fade-up" className="container">
        <div className="section">
          <h2 className="gefyraHeadingH2">Invest-2-earn</h2>
          <p>
            Create your avatar profiles and customizable with rare NFT items
          </p>{' '}
          <p>
            {' '}
            Invest and burn your NFT to earn exclusive, and exchangeable NFT
            items for your avatar
          </p>
          <p>Stack early to earn the rarest items to boost your avatar</p>
        </div>
        <div className="section gefyraCard">
          <img
            src={community}
            alt="Gefyra community"
            className="communityImg"
          />
        </div>
        <div className="section margin-bottom">
          {' '}
          <h2 className="gefyraHeadingH2">Social features</h2>
          <p>Gefyra connects the people matching the company needs </p>{' '}
          <p> Improved interaction between investors and fundraisers</p>
          <p>
            Follow, chat and exchange with other investors with social media
            features
          </p>
        </div>
      </div>
    </div>
  );
}

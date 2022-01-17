import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';
import Retail from '../../assets/iso/retail-iso.png';
import Bridge from '../../assets/iso/fundraisers.png';
import OTC from '../../assets/iso/otc-iso.png';
import Community from '../../assets/iso/nft-iso.png';

export default function WhatGPT3() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="gpt3__whatgpt3 section__margin"
      id="wgpt3"
    >
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">Our solutions</h1>
        <p>To connect traditional finance with the crypto-world</p>
      </div>
      <div data-aos="fade-up" className="gpt3__whatgpt3-container">
        <Feature
          img={Retail}
          title="Launchpad"
          text="Custom-made financing solutions for corporates
"
        />
        <Feature
          img={Bridge}
          title="Bridge"
          text="Invest in DeFi and security token with crypto and fiat"
        />
        <Feature
          img={OTC}
          title="OTC market"
          text="Secondary market for securities & NFT ticket
"
        />
        <Feature
          img={Community}
          title="Community"
          text="Unique customer experience based on community
"
        />
      </div>
    </div>
  );
}

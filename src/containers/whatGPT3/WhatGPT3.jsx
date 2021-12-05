import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

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
      <div data-aos="fade-up" className="gpt3__whatgpt3-feature">
        <Feature
          title="What is Gefyra?"
          text="Gefyra launchpad built on solana blockchain bridges traditional finance and digital assets by allowing crypto and fiat investors to participate in custom-made money-raising (IDO / STO) designed by the project teams themselves"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
      </div>
      <div data-aos="fade-up" className="gpt3__whatgpt3-container">
        <Feature
          title="Bridge"
          text="Invest in securities with crypto-currencies
"
        />
        <Feature
          title="Taylormade"
          text="Custom financing solutions for companies
"
        />
        <Feature
          title="OTC market"
          text="Secondary market for illiquid securities and NFT"
        />
        <Feature
          title="Community"
          text="Social platform dedicated to a unique ecosystem for investors and companies"
        />
      </div>
    </div>
  );
}

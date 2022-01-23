import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Product from '../../components/product/Product';
import './OurProducts.css';
import Retail from '../../assets/iso/retail-iso.png';
import Bridge from '../../assets/iso/fundraisers.png';
import OTC from '../../assets/iso/otc-iso.png';
import Community from '../../assets/iso/nft-iso.png';

export default function OurProducts() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div data-aos="fade-up" className="gefyra section__margin" id="ecosystem">
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">Our Ecosystem</h1>
        <p>To connect traditional finance with the crypto-world</p>
      </div>
      <div data-aos="fade-up" className="gefyra-container">
        <Product
          img={Retail}
          title="Launchpad"
          text="Custom-made financing solutions for corporates
"
        />
        <Product
          img={Bridge}
          title="Bridge"
          text="Invest in DeFi and security token with crypto and fiat"
        />
        <Product
          img={OTC}
          title="OTC market"
          text="Secondary market for securities & NFT ticket
"
        />
        <Product
          img={Community}
          title="Community"
          text="Unique customer experience based on community
"
        />
        <Product
          img={OTC}
          title="OTC market"
          text="Secondary market for securities & NFT ticket
"
        />
        <Product
          img={Community}
          title="Community"
          text="Unique customer experience based on community
"
        />
      </div>
    </div>
  );
}

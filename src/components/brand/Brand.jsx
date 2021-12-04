import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

export default function Brand() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div data-aos="fade-down" className="gpt3__brand section__padding">
      <div>
        <img src={google} />
      </div>
      <div>
        <img src={slack} />
      </div>
      <div>
        <img src={atlassian} />
      </div>
      <div>
        <img src={dropbox} />
      </div>
      <div>
        <img src={shopify} />
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
  Footer,
  Blog,
  Possibility,
  Feature2,
  Feature3,
  Features,
  WhatGPT3,
  Header,
  Slider,
} from './containers';
import { CTA, Brand, Navbar, Form, Progress, BackToTop } from './components';
import './App.css';

export default function App() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="App">
      <Progress />
      <div className="svg__bg">
        <Navbar />
        <Header />
      </div>
      <BackToTop />
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Feature2 />
      <Feature3 />
      <Slider />
      <Form />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

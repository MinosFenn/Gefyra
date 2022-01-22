import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo-svg/Gefyra-04-newblue.svg';
import './navbar.css';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div data-aos="fade-down" className="gef__navbar">
      <div className="gef__navbar-links">
        <div className="gef__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gef__navbar-links_container">
          <p>
            <a href="#solution">Solutions</a>
          </p>
          <p>
            <a href="#wgef">Ecosystem</a>
          </p>

          <p>
            <a href="#blog">Community</a>
          </p>
          <p>
            <a href="#blog">Roadmap</a>
          </p>
          <p>
            <a href="#blog">Contact</a>
          </p>
        </div>
      </div>
      <div className="gef__navbar-sign">
        <button type="button" className="gpt3__navbar-btn">
          <a href="test">One pager</a>
        </button>
        <button type="button" className="gpt3__navbar-btn">
          <a href="test">Pitchdeck</a>
        </button>
      </div>
      <div className="gef__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#094cb2"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#094cb2"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gef__navbar-menu_container scale-up-center">
            <div className="gef__navbar-menu_container-links">
              <p>
                <a href="#solution">Solutions</a>
              </p>
              <p>
                <a href="#wgef">Ecosystem</a>
              </p>

              <p>
                <a href="#blog">Community</a>
              </p>
              <p>
                <a href="#blog">Roadmap</a>
              </p>
              <p>
                <a href="#blog">Contact</a>
              </p>
            </div>
            <div className="gef__menu-sign">
              <button type="button" className="gpt3__navbar-btn">
                <a href="test">One pager</a>
              </button>
              <button type="button" className="gpt3__navbar-btn">
                <a href="test">Pitchdeck</a>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

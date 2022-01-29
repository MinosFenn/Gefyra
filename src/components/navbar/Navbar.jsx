import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo-svg/Gefyra-04-newblue.svg';
import './navbar.css';

export default function Navbar() {
  // manage mobile menu state
  const [toggleMenu, setToggleMenu] = useState(false);

  // manage menu hidden on scroll down
  const [show, setShow] = useState(false);
  let lastScrollY = window.scrollY;
  console.log(lastScrollY);
  const controlNavbar = () => {
    if (lastScrollY < window.scrollY) {
      setShow(true);
    } else {
      setShow(false);
    }

    lastScrollY = window.scrollY;
  };
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <div className={`gef__navbar ${show && 'gef__navbar__style'}`}>
      <div className="gef__navbar-links">
        <div className="gef__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gef__navbar-links_container">
          <p>
            <a href="#solutions">Solutions</a>
          </p>
          <p>
            <a href="#ecosystem">Ecosystem</a>
          </p>

          <p>
            <a href="#community">Community</a>
          </p>
          <p>
            <a href="#roadmap">Roadmap</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
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
                <a href="#solutions">Solutions</a>
              </p>
              <p>
                <a href="#ecosystem">Ecosystem</a>
              </p>

              <p>
                <a href="#community">Community</a>
              </p>
              <p>
                <a href="#roadmap">Roadmap</a>
              </p>
              <p>
                <a href="#contact ">Contact</a>
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

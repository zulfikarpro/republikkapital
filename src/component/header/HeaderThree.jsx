import React, { Component } from 'react';
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from 'react-icons/fa';
import { FiX, FiMenu } from 'react-icons/fi';
import Scrollspy from 'react-scrollspy';
class HeaderThree extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    this.stickyHeader = this.stickyHeader.bind(this);

    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener('load', function () {
      console.log('All assets are loaded');
    });
  }
  menuTrigger() {
    document.querySelector('.header-wrapper').classList.toggle('menu-open');
  }

  CLoseMenuTrigger() {
    document.querySelector('.header-wrapper').classList.remove('menu-open');
  }

  stickyHeader() {}

  render() {
    window.addEventListener('scroll', function () {
      var value = window.scrollY;
      if (value > 100) {
        document.querySelector('.header--fixed').classList.add('sticky');
      } else {
        document.querySelector('.header--fixed').classList.remove('sticky');
      }
    });

    var elements = document.querySelectorAll('.has-droupdown > a');
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector('.submenu')
            .classList.toggle('active');
          this.classList.toggle('open');
        };
      }
    }
    const { logo, color = 'default-color' } = this.props;
    let logoUrl;
    logoUrl = (
      <img
        className="ptb--25"
        src="/assets/images/logo/logo1.png"
        alt="logo"
        style={{ width: '230px' }}
      />
    );

    // if (logo === 'light') {
    //   logoUrl = (
    //     <img src="/assets/images/logo/logo-light.png" alt="Digital Agency" />
    //   );
    // } else if (logo === 'dark') {
    //   logoUrl = (
    //     <img src="/assets/images/logo/logo-dark.png" alt="Digital Agency" />
    //   );
    // } else if (logo === 'symbol-dark') {
    //   logoUrl = (
    //     <img
    //       src="/assets/images/logo/logo1.png"
    //       alt="logo"
    //       style={{ maxWidth: '200px' }}
    //     />
    //   );
    // } else if (logo === 'symbol-light') {
    //   logoUrl = (
    //     <img
    //       src="/assets/images/logo/logo-symbol-light.png"
    //       alt="Digital Agency"
    //     />
    //   );
    // } else {
    //   logoUrl = (
    //     <img src="/assets/images/logo/logo.png" alt="Republik Kapital" />
    //   );
    // }

    return (
      <header className={`header-area header--fixed `}>
        <div className="container">
          <div className="header-wrapper">
            <div className="header-left d-flex align-items-center">
              <div className="logo">
                <a href={'/'}>{logoUrl}</a>
              </div>
            </div>

            <div className="header-right d-flex align-items-center"></div>
            <nav className="mainmenunav d-lg-block ml--50">
              <Scrollspy
                className="mainmenu"
                items={[
                  'home',
                  'whoweare',
                  'whatwedo',
                  'products',
                  'contactus',
                ]}
                currentClassName="is-current"
                offset={0}
              >
                <li>
                  <a href="#home" onClick={this.CLoseMenuTrigger}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#whoweare" onClick={this.CLoseMenuTrigger}>
                    Who We Are
                  </a>
                </li>
                <li>
                  <a href="#whatwedo" onClick={this.CLoseMenuTrigger}>
                    What We Do
                  </a>
                </li>
                <li>
                  <a href="#products" onClick={this.CLoseMenuTrigger}>
                    Products & Service
                  </a>
                </li>
                {/* <li>
                <a href="#partner" onClick={this.CLoseMenuTrigger}>
                  Contact Us
                </a>
              </li> */}
                <li>
                  <a href="#contactus" onClick={this.CLoseMenuTrigger}>
                    Contact Us
                  </a>
                </li>

                {/* <li><a href="#service">Service</a></li> */}
                {/* <li><a href="#blog">Blog</a></li>
                                <li><a href="#contact">Contact</a></li> */}
              </Scrollspy>
            </nav>

            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
          {/* <div className="header-right"> */}
          {/* <div className="social-share-inner">
                            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="header-btn">
                            <a className="rn-btn" href="https://themeforest.net/checkout/from_item/25457315?license=regular">
                                <span>buy now</span>
                            </a>
                        </div> */}
        </div>
      </header>
    );
  }
}
export default HeaderThree;

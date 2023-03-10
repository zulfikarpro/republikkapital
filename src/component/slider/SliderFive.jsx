import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { FiArrowRightCircle } from 'react-icons/fi';

const SlideList = [
  {
    textPosition: 'text-center',
    category: '',
    title: 'Marketing',
    description:
      'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
    buttonText: 'Contact Us',
    buttonLink: '/contact-us',
  },
];

class SliderFive extends Component {
  render() {
    return (
      <>
        <div
          className="position-absolute"
          style={{
            height: '100vh',
            width: '100vw',
            zIndex: -1,
            overflow: 'hidden',
          }}
        >
          <video
            className="d-inline-block videos"
            playsinline="playsinline"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
            src="/assets/video/KAPITAL.mp4"
            style={{ zIndex: -2 }}
          />
        </div>
        <div
          className="slider-activation"
          style={{ background: `transparent`, height: '100vh', width: '100vw' }}
        >
          {/* Start Single Slide */}
          <div
            className="slide slide-style-1 slider-fixed--height d-flex align-items-center h-100"
            data-black-overlay="6"
          >
            <div className="container ">
              <div className="row align-items-center my-auto">
                <div className="col-lg-12 align-items-center">
                  <div className="inner">
                    {/* <h2 className="h2">We Are Advance in</h2> */}
                    <div className="front-title customTitle">
                      REPUBLIK KAPITAL
                    </div>
                    <h3 className="h3">
                      Investment and Monetizing Asset Management
                    </h3>
                  </div>
                </div>
              </div>
              {/* Start Service Area */}
              {/* <div className="service-wrapper service-white row ml--10">
              <IconContext.Provider value={{ color: 'white', size: '30px' }}>
                <div className="mr--10">
                  <FiArrowRightCircle />
                </div>
              </IconContext.Provider>
              <div>
                <h4>more</h4>
              </div>
            </div> */}
              {/* End Service Area */}
            </div>
          </div>
          {/* End Single Slide */}
        </div>
      </>
    );
  }
}
export default SliderFive;

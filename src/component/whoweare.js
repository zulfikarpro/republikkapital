import React, { Component } from 'react';

const WhoWeAre = () => {
  const title = 'Who We Are',
    description1 = `Our company focuses on managing national and international investment
      funds from various sources for the sole purpose in promoting and
      enlarging private technology firms and heavy industry businesses in
      South East Asia.`,
    description2 = `To become the primary choice for international investors, private and government
    alike, that wish to diversify their portfolio in the rising technology-based
    companies in Asia.`;
  return (
    <div id="" className="" style={{ backgroundColor: 'red' }}>
      <div id="whoweare" className="about-area">
        <div className="about-wrapper">
          <div className="row">
            <div className="col-lg-6 col-sm-12 align-content-start">
              <div className="thumbnail">
                <img
                  className="responsive bg-primary"
                  src="/assets/images/whoweare/whowearethumb.jpg"
                  alt="Who We Are Images"
                />
              </div>
            </div>
            <div className="col-lg-5 col-sm-12 my-auto">
              <div className="container">
                <div className="about-inner inner">
                  <div className="section-title ">
                    <h2 className="text-dark font-weight-bold">WHO WE ARE</h2>
                    <p className="text-dark text-justify">{description1}</p>
                    <div className="mt--50" />
                    <h3 className="text-dark font-weight-bold">Vision</h3>
                    <p className="text-dark text-justify">{description2}</p>
                    <h3 className="text-dark font-weight-bold">Mision</h3>
                    <p className="text-dark text-justify">{description2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default WhoWeAre;

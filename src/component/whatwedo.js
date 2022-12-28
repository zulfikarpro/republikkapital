import React, { Component } from 'react';

const Whatwedo = () => {
  const description1 = `
  Republik Kapital is a subsidiary company of Republikorp
  which engages in the field of finance, investment, and
  monetizing asset management for a specific industry
  in Indonesia.`;
  return (
    <div
      id=""
      className="fix about-area"
      style={{ width: '100vw', height: '100vh' }}
    >
      <div id="whatwedo" className="about-area">
        <div className="about-wrapper whatwedo px-6">
          <div className="container h-100">
            <div className="flex row h-100 w-100 align-items-center">
              <div className="col-lg-5">
                <div className="about-inner inner">
                  <div className="section-title ">
                    <h2 className="font-weight-bold">WHAT WE DO</h2>
                    <p className="text-light text-justify font-weight-regular">
                      {description1}
                    </p>
                    <div className="mt--50" />
                    {/* <h3 className="font-weight-bold">Vision</h3> */}
                    {/* <p className="text-dark text-justify">{description2}</p> */}
                    {/* <h3 className="font-weight-bold">Mision</h3> */}
                    {/* <p className="text-dark text-justify">{description2}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Whatwedo;

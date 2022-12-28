import React from 'react';
const productLTR = (images, title, text) => {
  return (
    <div className="container row mt--60 justify-content-between productItem">
      <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-auto">
        <img className="rounded mx-auto d-block" src={images} alt={title}></img>
      </div>
      <div className="col-lg-6 col-md- col-sm-12 col-12 my-auto">
        <h3>{title}</h3>
        <p className="text-light text-justify">{text}</p>
      </div>
    </div>
  );
};
const productRTL = (images, title, text, array) => {
  return (
    // <></>
    <div className="productItem rtl mt--60">
      <div className="col-lg-6 col-md- col-sm-12 col-12 my-auto">
        <h3>{title}</h3>
        <p className="text-light text-justify">{text}</p>
        {array ? (
          <div className="orderNumber">
            <ul className="directions">
              {array.map((item, index) => (
                <p className="description text-light">
                  <li>{item}</li>
                </p>
              ))}
            </ul>
          </div>
        ) : (
          ''
        )}
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-auto">
        <img className="rounded mx-auto d-block" src={images} alt={title}></img>
      </div>
    </div>
  );
};

const ProductPage = ({ images, label }) => {
  return (
    <>
      <div className="col-lg-4 align-items-end">
        <img
          className="responsive"
          src={`/assets/images/products/${images}`}
          alt={images}
        />
        <h3 className="text-dark text-center font-weight-bold mt--10">
          {label}
        </h3>
      </div>
    </>
  );
};
const Products = () => {
  return (
    <div id="" className="about-area">
      <div className="row justify-content-center products-wrapper" style={{}}>
        <div className="col-lg-10 align-self-center">
          <h2 className="text-dark text-center">PRODUCTS & SERVICES</h2>
          <div className="container">
            <div className="row mt--100 w--100">
              <ProductPage
                images={'product-01.png'}
                label={'Assets Management'}
              />
              <ProductPage
                images={'product-02.png'}
                label={'Investment Banking'}
              />
              <ProductPage images={'product-03.png'} label={'Corporate M&A'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

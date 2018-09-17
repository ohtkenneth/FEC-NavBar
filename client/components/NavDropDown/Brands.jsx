import React from 'react';

const Brands = props => {
  let newBrand = props.brands.filter((brand, index) => index < 5);
  let featured = props.brands.filter((brand, index) => index > 5 && index < 10);
  return (
    <div
      style={{
        position: 'absolute',
        // left: 0,
        // right: 0,
        width: '65%',
        margin: 'auto',
        // marginLeft: '-50px',
        // top: '50%',
        // marginTop: '-50px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        boxShadow: '0 1px 8px rgba(0,0,0,.15)'
      }}
    >
      <div
        style={{
          flexGrow: 1.2,
          paddingLeft: '2em'
        }}
      >
        <h4>Brands A-Z</h4>
        <h4>Sephora Collection</h4>
        <h4>New Brands</h4>
        <div>
          {newBrand.map(brand => (
            <div>{brand}</div>
          ))}
        </div>
        <h4>Featured Brands</h4>
        {featured.map(brand => (
          <div>{brand}</div>
        ))}
      </div>
      <img src="https://www.sephora.com/contentimages/meganav/large/2018-09-13-hp-slide-charlotte-tilbury-us-ca-m-slice.jpg" />
      <img src="https://www.sephora.com/contentimages/meganav/large/2018-08-09-category-botnav-huda-us-ca-d-slice.jpg" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <img src="https://www.sephora.com/contentimages/meganav/medium/2018-08-16-hp-meganav-med-luxe-us-ca-d-slice.jpg" />
        <img src="https://www.sephora.com/contentimages/meganav/100517/2017-10-05-hp-meganav-sm-minimadness-gifts-d-us-slice.jpg" />
      </div>
    </div>
  );
};
export default Brands;

import React from 'react';

var SpecificCatEntry = props => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1px 50px 1px 50px',
        backgroundColor: 'white',
        zIndex: 99999
      }}
    >
      <div>
        <h5>Just Arrived</h5>
        <h5>Bestsellers</h5>
        <h5>Value &amp; Gift Sets</h5>
        <h5>Mini Size</h5>
        <h5>Makeup Palettes</h5>
        <h5>Face</h5>
      </div>
      <div>
        <h5>Women</h5>
        <h5>Men</h5>
      </div>
      <div>
        <h5>Candles {'&'} Home Scents</h5>
        <h5>Shop by Frangrance Family</h5>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h5>Featured</h5>
        <img src="https://www.sephora.com/contentimages/meganav/medium/2018-08-16-hp-meganav-med-luxe-us-ca-d-slice.jpg" />
        <img src="https://www.sephora.com/contentimages/meganav/100517/2017-10-05-hp-meganav-sm-minimadness-gifts-d-us-slice.jpg" />
      </div>
    </div>
  );
};
export default SpecificCatEntry;

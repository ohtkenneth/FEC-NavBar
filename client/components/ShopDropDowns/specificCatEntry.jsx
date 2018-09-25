import React from 'react';

var SpecificCatEntry = props => {
  return (
    <div className="specificCatEntry">
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
      <div className="column">
        <h5>Featured</h5>
        <img src="https://imgur.com/B7OA7Fs.jpg" />
        <img src="https://imgur.com/c9lN5iZ.jpg" />
      </div>
    </div>
  );
};
export default SpecificCatEntry;

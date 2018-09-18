import React from 'react';

const Gifts = props => {
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
        <h4>
          <a href="/product">Gift Cards</a>
        </h4>
        <h4>
          <a href="/product">Gift Finder</a>
        </h4>
        <h4>
          <a href="/product">View All Gifts</a>
        </h4>
        <h4>
          <a href="/product">Mini Size</a>
        </h4>
        <h4>
          <a href="/product">Value Sets</a>
        </h4>
        <h4>
          <a href="/product">By Price</a>
        </h4>
        <div>
          <a href="https://www.w3schools.com/images/">$10 and Under</a>
        </div>
        <div>$25 and Under</div>
        <div>$50 and Under</div>
        <div>$75 and Under</div>
        <div>$100 and Under</div>
      </div>
      <div
        style={{
          flexGrow: 1.2,
          paddingLeft: '2em'
        }}
      >
        <h4>By Category</h4>
        <div>Makeup</div>
        <div>Skincare</div>
        <div>Fragrance</div>
        <div>Bath {'&'} Body</div>
        <div>Candles {'&'} Home Scents</div>
        <div>Men</div>
      </div>
      <img src="https://www.sephora.com/contentimages/homepage/042418/Meganav/2018-04-19-meganav-lg-button-gift-finder-evergreen-slice.jpg" />
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
export default Gifts;

import React from 'react';

const StoresLocator = props => {
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
      <img src="https://www.sephora.com/contentimages/storehq/053117/mega-nav/2015-05-31-hp-meganav-stores-services-beauty-together-lg-d-slice.jpg" />
      <img src="https://www.sephora.com/contentimages/storehq/053117/mega-nav/2015-05-31-hp-meganav-stores-classes-correct-conceal-lg-d-slice.jpg" />
      <img src="https://www.sephora.com/contentimages/storehq/053117/mega-nav/2015-05-31-hp-meganav-stores-events-discover-together-lg-d-slice.jpg" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <img src="https://www.sephora.com/contentimages/storehq/053117/mega-nav/2015-05-31-hp-meganav-stores-find-sephora-med-d-slice.jpg" />
        <img src="https://www.sephora.com/contentimages/storehq/053117/mega-nav/2015-05-31-hp-meganav-stores-services-book-reservation-med-d-slice.jpg" />
      </div>
    </div>
  );
};
export default StoresLocator;

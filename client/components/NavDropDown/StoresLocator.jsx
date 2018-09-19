import React from 'react';

const StoresLocator = props => {
  return (
    <div className="NavDrops">
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

import React from 'react';

const Community = props => {
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
      <img src="https://www.sephora.com/contentimages/meganav/100117/2017-10-01-meganav-community-evergreen-01-talk-about-it-slice.jpg" />
      <img src="https://www.sephora.com/contentimages/meganav/090117/2017-09-01-meganav-community-conversations-bottom-slice.jpg" />
      <img src="https://www.sephora.com/contentimages/meganav/090117/2017-09-01-meganav-community-gallery-lg-d-slice.jpg" />
      <img src="https://www.sephora.com/contentimages/meganav/090117/2017-09-01-meganav-community-groups-lg-d-slice.jpg" />
    </div>
  );
};
export default Community;

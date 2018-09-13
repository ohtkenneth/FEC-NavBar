import React from 'react';

class NavDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ads: []
    };
  }
  render() {
    return (
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          margin: 'auto',
          // marginLeft: '-50px',
          // top: '50%',
          // marginTop: '-50px',
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'white',
          paddingLeft: '50px',
          paddingRight: '50px'
        }}
        className="NavDropDown"
        onMouseLeave={() => {
          this.props.hideDropDown(this.props.name);
        }}
      >
        <div
          style={{
            width: '300px'
          }}
        >
          <h4>Brands A-Z</h4>
          <h4>Sephora Collection</h4>
          <h4>New Brands</h4>
          <ul>
            <li>something</li>
          </ul>
        </div>
        <img src="https://www.sephora.com/contentimages/meganav/large/2018-08-09-meganav-lrg-foundation-finder-us-ca-d-slice.jpg" />
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
  }
}
export default NavDropDown;

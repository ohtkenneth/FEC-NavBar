import React from 'react';
import Brands from './Brands.jsx';
import New from './New.jsx';
import Gifts from './Gifts.jsx';

class NavDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whichTab: props.name
    };
  }
  render() {
    console.log('inside nav', this.state.whichTab);
    let navRender;
    if (this.state.whichTab === 'NEW') {
      navRender = <New />;
    } else if (this.state.whichTab === 'BRANDS') {
      navRender = <Brands />;
    } else {
      navRender = <Gifts />;
    }
    return (
      <div
        // style={{
        //   position: 'absolute',
        //   // left: 0,
        //   // right: 0,
        //   margin: 'auto',
        //   // marginLeft: '-50px',
        //   // top: '50%',
        //   // marginTop: '-50px',
        //   display: 'flex',
        //   flexDirection: 'row',
        //   backgroundColor: 'white',
        //   border: 'solid'
        // }}
        className="NavDropDown"
        onPointerEnter={this.props.showDrop}
        onPointerLeave={this.props.hideDropDown}
      >
        <div
          style={{
            width: '300px'
          }}
        >
          {navRender}
          {/* <Brands /> */}
        </div>
      </div>
    );
  }
}
export default NavDropDown;

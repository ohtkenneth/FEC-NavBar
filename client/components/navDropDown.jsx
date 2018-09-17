import React from 'react';
import Brands from './NavDropDown/Brands.jsx';
import New from './NavDropDown/New.jsx';
import Gifts from './NavDropDown/Gifts.jsx';
import Community from './NavDropDown/Community.jsx';
import HowTos from './NavDropDown/HowTos.jsx';
import StoresLocator from './NavDropDown/StoresLocator.jsx';

class NavDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whichTab: props.name,
      brands: props.brands
    };
  }
  render() {
    console.log('inside nav', this.state.whichTab);
    let navRender;
    if (this.props.name === 'NEW') {
      navRender = <New />;
    } else if (this.props.name === 'BRANDS') {
      navRender = <Brands brands={this.state.brands} />;
    } else if (this.props.name === 'GIFTS') {
      navRender = <Gifts />;
    } else if (this.props.name === 'COMMUNITY') {
      navRender = <Community />;
    } else if (this.props.name === 'HOW-TOS') {
      navRender = <HowTos />;
    } else {
      navRender = <StoresLocator />;
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

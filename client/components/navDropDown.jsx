import React from 'react';
import Brands from './Brands.jsx';
import New from './New.jsx';
import Gifts from './Gifts.jsx';
import Community from './Community';
import HowTos from './HowTos';
import StoresLocator from './StoresLocator';

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

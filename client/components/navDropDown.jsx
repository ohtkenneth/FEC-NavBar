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
        className="StyledNav"
        onPointerEnter={e => this.props.showDrop(this.props.name)}
        onPointerLeave={this.props.hideDropDown}
      >
        <div>{navRender}</div>
      </div>
    );
  }
}
export default NavDropDown;

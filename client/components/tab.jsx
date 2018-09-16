import React from 'react';

import NavDropDown from './navDropDown';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleNav: false
    };
    this.handleNav = this.handleNav.bind(this);
  }
  handleNav() {
    this.setState({
      toggleNav: !this.state.toggleNav
    });
  }
  render() {
    // console.log('inside tab:', this.props.name);
    return (
      <div
        className="tabs"
        onPointerEnter={() => {
          this.props.showDropDown(this.props.name, true);
          // this.handleNav();
        }}
        // onPointerLeave={this.handleNav}
      >
        <div>{this.props.name}</div>
        {/* {this.state.toggleNav ? <NavDropDown /> : <div />} */}
      </div>
    );
  }
}
export default Tab;

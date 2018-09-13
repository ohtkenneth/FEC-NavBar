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
    return (
      <div
        className="tabs"
        onMouseEnter={() => {
          props.showDropDown(props.name);
          // this.handleNav();
        }}
        // onMouseLeave={this.handleNav}
      >
        <div>{this.props.name}</div>
        {/* {this.state.toggleNav ? <NavDropDown /> : <div />} */}
      </div>
    );
  }
}
export default Tab;

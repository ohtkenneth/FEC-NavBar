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
        className="NavDropDown"
        onMouseLeave={() => {
          this.props.hideDropDown(this.props.name);
        }}
      >
        This is the Nav Drop Down
        <div>it's going to have 4 columns</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    );
  }
}
export default NavDropDown;

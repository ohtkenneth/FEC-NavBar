import React from 'react';

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleDropDown: false
    };
    this.handleDrop = this.handleDrop.bind(this);
  }
  handleDrop() {
    this.setState({
      toggleDropDown: !this.state.toggleDropDown
    });
  }
  render() {
    return (
      <div onMouseEnter={this.handleDrop} onMouseLeave={this.handleDrop}>
        <div>shopping cart</div>
        {this.state.toggleDropDown ? (
          <div>Your shopping basket is empty</div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Basket;

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
      <div>
        <div onMouseOver={this.handleDrop}>shopping cart</div>
        {this.state.toggleDropDown ? (
          <div onMouseLeave={this.handleDrop}>
            Your shopping basket is empty
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Basket;

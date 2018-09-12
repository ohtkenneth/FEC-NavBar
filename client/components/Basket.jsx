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
      <div
        style={{
          postion: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          zIndex: 999
        }}
        onMouseEnter={this.handleDrop}
        onMouseLeave={this.handleDrop}
      >
        <div>shopping cart</div>
        {this.state.toggleDropDown ? (
          <div
            style={{
              postion: 'absolute',
              zIndex: 999
            }}
          >
            <div>Your basket is empty</div>
            <p>Sign in to see items you mayt have added previously.</p>
            <button>SIGN IN</button>
            <p>See samples, rewards and promotions in </p>
            <a>basket</a>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Basket;

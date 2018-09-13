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
          display: 'flex',
          flexDirection: 'column'
        }}
        onMouseEnter={this.handleDrop}
        onMouseLeave={this.handleDrop}
      >
        <div>shopping cart</div>
        <div>
          {this.state.toggleDropDown ? (
            <div
              style={{
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: 'white',
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
      </div>
    );
  }
}

export default Basket;

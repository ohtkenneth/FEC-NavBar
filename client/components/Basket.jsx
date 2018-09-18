import React from 'react';
import Image from 'react-svg-loader!../Images/Basket.svg';

import style from '../styles/Signup.css';
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
        <div>
          <Image height={30} width={30} />

          <div>
            {this.state.toggleDropDown ? (
              <div
                style={{
                  position: 'absolute',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '400px',
                  right: '17.5%',
                  // top: '100%',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  wordWrap: 'normal',

                  zIndex: 1030
                }}
              >
                <div>Your basket is empty</div>
                <div style={{ display: 'flex' }}>
                  <p>Sign in to see items you may have added previously.</p>
                  <button className={style.button}>SIGN IN</button>
                </div>
                <p>See samples, rewards and promotions in </p>
                <a>basket</a>
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Basket;

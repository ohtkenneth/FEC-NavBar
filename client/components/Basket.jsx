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
        className="column"
        onMouseEnter={this.handleDrop}
        onMouseLeave={this.handleDrop}
      >
        <div>
          <Image height={30} width={30} />
          <div className="StyledBasketBox">
            {this.state.toggleDropDown ? (
              <div className="StyledBasketDropDown">
                <div>Your basket is empty</div>
                <div className="row">
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

// export default Basket;
export default withStyles(style)(Basket);
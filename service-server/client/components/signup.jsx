import React from 'react';
import SignupDropdown from './SignupDropdown.jsx';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false
    };
    this.handleDropdown = this.handleDropdown.bind(this);
  }
  handleDropdown() {
    this.setState({
      dropdown: !this.state.dropdown
    });
  }
  render() {
    return (
      <div
        className="StyledSignup"
        onMouseEnter={this.handleDropdown}
        onMouseLeave={this.handleDropdown}
      >
        <span className="spreadFlex">
          <span>
            <h3>Hi, beautiful</h3>
            <div>Sign In or Register</div>
          </span>
          {this.state.dropdown ? (
            <span className="upArrow" />
          ) : (
            <span className="downArrow" />
          )}
        </span>
        {this.state.dropdown ? (
          <SignupDropdown dropout={this.handleDropout} />
        ) : (
          <div />
        )}
      </div>
    );
  }
}
export default Signup;

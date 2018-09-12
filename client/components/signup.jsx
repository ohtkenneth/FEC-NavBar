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
        onMouseEnter={this.handleDropdown}
        onMouseLeave={this.handleDropdown}
      >
        <h3>Hi, beautiful</h3>
        <div>Sign In or Register</div>
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

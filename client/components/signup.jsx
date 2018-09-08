import React from 'react';
import SignupDropdown from './SignupDropdown.jsx';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false
    };
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleDropout = this.handleDropout.bind(this);
  }
  handleDropdown() {
    this.setState({
      dropdown: true
    });
  }
  handleDropout() {
    this.setState({
      dropdown: false
    });
  }
  render() {
    return (
      <div onMouseEnter={this.handleDropdown}>
        <h3>Hello there beautiful</h3>
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

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
        style={{
          display: 'block',
          position: 'relative',
          marginRight: '8px',
          width: '180px',
          padding: '8px 20px 8px 20px'
        }}
      >
        <span style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>
            <h3>Hi, beautiful</h3>
            <div style={{ fontSize: 12 }}>Sign In or Register</div>
          </span>
          {this.state.dropdown ? (
            <span
              style={{
                alignSelf: 'center',
                width: 0,
                height: 0,
                borderLeft: '5px solid transparent',
                borderRight: '5px solid transparent',
                borderBottom: '5px solid black'
              }}
            />
          ) : (
            <span
              style={{
                alignSelf: 'center',
                width: 0,
                height: 0,
                borderLeft: '5px solid transparent',
                borderRight: '5px solid transparent',
                borderTop: '5px solid black'
              }}
            />
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

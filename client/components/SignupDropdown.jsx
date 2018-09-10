import React from 'react';

var SignupDropdown = props => {
  return (
    <div
      onMouseLeave={props.dropout}
      style={{ position: 'absolute', backgroundColor: 'white' }}
    >
      this is a drop down
      <div>
        here are some more drop downs
        <div>and another</div>
      </div>
    </div>
  );
};
export default SignupDropdown;

import React from 'react';

var SignupDropdown = props => {
  return (
    <div
      // onMouseLeave={props.dropout}
      style={{
        position: 'absolute',
        backgroundColor: 'white',
        zIndex: 999
      }}
    >
      <br />
      <div>Profile</div>
      <div>Beauty Insider</div>
      <div>Lists</div>
      <div>Account</div>
      <br />
      <div>Orders</div>
      <div>Reservations</div>
      <div>Rewards Bazaar</div>
    </div>
  );
};
export default SignupDropdown;

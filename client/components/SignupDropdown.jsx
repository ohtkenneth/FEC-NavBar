import React from 'react';

var SignupDropdown = props => {
  return (
    <div
      // onMouseLeave={props.dropout}
      style={{
        position: 'absolute',
        display: 'block',
        backgroundColor: 'white',
        padding: '8px 16px 8px 16px',
        boxShadow: '0 1px 8px rgba(0,0,0,.15)',
        marginRight: '8px',
        // width: '100%',

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

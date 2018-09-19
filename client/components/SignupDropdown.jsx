import React from 'react';

var SignupDropdown = props => {
  return (
    <div
      style={{
        position: 'absolute',
        display: 'block',
        backgroundColor: 'white',
        padding: '8px 20px 8px 20px',
        boxShadow: '0 1px 8px rgba(0,0,0,.15)',
        marginRight: '8px',
        width: 145,
        marginBottom: '2em',
        lineHeight: '1.5em',
        fontSize: 12,
        zIndex: 999
      }}
    >
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

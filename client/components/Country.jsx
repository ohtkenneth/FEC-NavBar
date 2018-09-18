import React from 'react';
import USA from 'react-svg-loader!../Images/USA.svg';
import Can from 'react-svg-loader!../Images/Canada.svg';

const Country = props => {
  let countryRender;
  // console.log(props.country);
  if (props.country === 'US') {
    countryRender = (
      <span
        style={{
          display: 'flex'
        }}
      >
        <USA height={15} width={15} />
        <div>US</div>
      </span>
    );
  } else {
    countryRender = (
      <span
        style={{
          display: 'flex'
        }}
      >
        <Can height={15} width={15} />
        <div>Can</div>
      </span>
    );
  }
  return <span>{countryRender}</span>;
};
export default Country;

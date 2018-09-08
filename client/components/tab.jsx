import React from 'react';

var Tab = props => {
  return (
    <div
      className="tabs"
      onMouseEnter={() => {
        props.showDropDown(props.name);
      }}
    >
      {props.name}
    </div>
  );
};

export default Tab;

import React from 'react';
import SpecificCatEntry from './specificCatEntry.jsx';
//onMouseOut={props.toggle}
var CategoryEntry = props => {
  return (
    <div
      className="categoryEntry"
      onMouseEnter={e => {
        props.displayBox(props.name);
      }}
    >
      {props.name}
    </div>
  );
};
export default CategoryEntry;

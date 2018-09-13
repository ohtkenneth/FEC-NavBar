import React from 'react';
import SpecificCatEntry from './specificCatEntry.jsx';
//onMouseOut={props.toggle}
var CategoryEntry = props => {
  return (
    <div
      style={{
        paddingBottom: '1em',
        paddingLeft: '50px',
        paddingRight: '50px',
        borderStyle: 'solid',
        borderWidth: '0px 1px 0px 1px',
        backgroundColor: 'white',
        zIndex: 999
      }}
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

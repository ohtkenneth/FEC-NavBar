import React from 'react';
import SpecificCatEntry from './specificCatEntry.jsx';
import styled from 'styled-components';
//onMouseOut={props.toggle}

var CategoryEntry = props => {
  return (
    <div
      className="CatEntStyled"
      onMouseOver={e => {
        props.displayBox(props.name);
      }}
    >
      {props.name}
    </div>
  );
};
export default CategoryEntry;

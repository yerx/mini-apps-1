import React from 'react';
import '../index.css';

const Square = (props) => {
  return (
    <button
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}


export default Square;
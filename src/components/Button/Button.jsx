import React from 'react';

const Button = (props) => (
    <button className="btn" onClick={props.onButtonPress}>
        {props.children}
    </button>
  );
  
export default Button;
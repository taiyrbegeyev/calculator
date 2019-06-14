import React from 'react';

const LargeButton = (props) => (
    <button className="btn--large" onClick={props.onButtonPress}>
        {props.children}
    </button>
  );
  
export default LargeButton;
import React from 'react';

function Input({type, onKeyDown, placeholder}, ref) {
  return(
    <input ref={ref} type={type} onKeyDown={onKeyDown} placeholder={placeholder}/>
  );
}

const forwardedInput = React.forwardRef(Input)

export default forwardedInput;

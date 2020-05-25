import React from 'react';

function Input({type, onKeyDown, placeholder}, ref) {
  return(
    <Input ref={ref} type={type} onKeyDown={onKeyDown} placeholder={placeholder}/>
  );
}

const forwardedInput = React.forwardRef(Input)

export default forwardedInput;

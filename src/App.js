
import React, { useEffect, useRef } from 'react';
import './App.css';
import Input from './components/Input'

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const submitRef = useRef(null);
  


  useEffect(() => {
    firstNameRef.current.focus();
  }, []);


  function firstKeyDown(e){
    e.key === 'Enter' && lastNameRef.current.focus();
  };
  function lastKeyDown(e){
    e.key === 'Enter' && emailRef.current.focus();
  };
  function emailKeyDown(e){
    e.key === 'Enter' && submitRef.current.focus();
  };

  function submitClick(){
     alert('Fooooi!');
     console.log('click called');
    
  };

     



  return (
    <div className="App">
      <Input ref={firstNameRef} onKeyDown={firstKeyDown} type="text" placeholder="Enter first name" />
      <br />
      <Input ref={lastNameRef} onKeyDown={lastKeyDown} type="text" placeholder="Enter last name" />
      <br />
      <Input ref={emailRef} onKeyDown={emailKeyDown} type="text" placeholder="Enter email" />
      <br />
      <button type="button" ref={submitRef} onClick={submitClick}  >Submit</button>
    </div>
  );
}

export default App;

// 
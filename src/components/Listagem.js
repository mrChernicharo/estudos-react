import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function Listagem() {
  const [name, setName] = useState('');
  const [names, setNames] = useState(['lapa', 'estácio']);

  const inputRef = useRef(null);
  const buttonRef = useRef(null)

  function handleInputChange(e) {
    setName(e.target.value);
    console.log(e.target.value);
  }
  
  function handleAddName() {
    if(!name){
      return;
    }
    setNames(currentNames => [...currentNames, name]);
    setName('');
    inputRef.current.focus();
  }

  function handleInputEnter(e){
    (e.key === 'Enter') && handleAddName();
  }


  useEffect(() => {
    inputRef.current.focus();

    console.log(names)
    names.map((name, index) => (console.log({index: index, name: name})))
  }, [names]);

  return (
    <div>
      <input ref={inputRef} onKeyDown={handleInputEnter} type="text" value={name} onChange={handleInputChange}></input>
      <button ref={buttonRef} type="submit" onClick={() => handleAddName()}>Adicionar</button>  

      <ul>
        {names.map((name, index) => (<li key={index}>{name}</li>))}
        

      </ul>

    </div>
  );
}

export default Listagem;
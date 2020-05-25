import React, { useState, useEffect, useRef } from 'react';





const Contador = (props) => {
  const renders = useRef(0);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

    return(
      <>  
        <p>Contador: {props.contador}</p>
        <p>Renderizações: {renders.current}</p>
      </>  
    );
}


function App() {  
  const minhaDiv = useRef(null)
  const [counter, setCounter] = useState(0)


  return (
    <>
      <div ref={minhaDiv} style={{backgroundColor: 'lightcoral'}}>

      <h2>Hello</h2>
      <Contador contador={counter} />
      <button onClick={() => setCounter(old => old + 1)}>Somar</button>
      <button onClick={() => setCounter(old => old - 1)}>Subtrair</button>
      <br />
      <button onClick={()=> console.log(minhaDiv)}>Console</button>

      </div>
    </>

  );
}

export default App;

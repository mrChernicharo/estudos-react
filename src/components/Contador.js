import React, { useState, useEffect, useRef } from "react";

const Painel = ({valor}) => {
  const updates = useRef(0);

  useEffect(() => {
      updates.current = updates.current + 1
  });

  return (
  <>  
    <p>Contador: {valor}</p>
    <p>Atualizações: {updates.current}</p>
  </>
  );
};


function Contador() {
  const [count, setCount] = useState(10);

  return(
    <div>  
      <h3>Contador</h3>
      <Painel valor={count}/>  
      <button onClick={() => setCount(old => old + 1)}>Somar</button>  
      <button onClick={() => setCount(old => old - 1)}>Subtrair</button>  
    </div>  
  );
}


export default Contador;
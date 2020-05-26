import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

function Instrumentos(){
  const instrumentRef = useRef(null);
  const yearRef = useRef(null);
  const countryRef = useRef(null);
  const priceRef = useRef(null);
  const buttonRef = useRef(null);
  
  const [instrumento, setInstrumento] = useState('');
  const [ano, setAno] = useState('');
  const [pais, setPais] = useState('');
  const [preco, setPreco] = useState('');
  const [instrumentos, setInstrumentos] = useState([
    {id: 2,instrumento: 'violão', ano: 2010, pais: 'Espanha', preco: '4200'},
    {id: 3,instrumento: 'guitarra', ano: 1987, pais: 'Japão', preco: '3800'}
  ]);

  function handleInstrumentInputChange(e) {
    setInstrumento(e.target.value);
    e.key === 'Enter' && yearRef.current.focus();
  }
  function handleYearInputChange(e) {
    setAno(e.target.value);
  }
  function handleCountryInputChange(e) {
    setPais(e.target.value);
  }
  function handlePriceInputChange(e) {
    setPreco(e.target.value);
  }

  function focusYearInput(e) {
    e.key === 'Enter' && yearRef.current.focus()
  }
  function focusCountryInput(e) {
    e.key === 'Enter' && countryRef.current.focus()
  }  
  function focusPriceInput(e) {
    e.key === 'Enter' && priceRef.current.focus()
  }
  function focusSubmitButton(e) {
    e.key === 'Enter' && buttonRef.current.focus()
  }

  function handleAddInstrument(e){
    e.preventDefault();


    setInstrumentos(instrumentos => [...instrumentos, 
      {id: Math.random(),instrumento: instrumento, ano: ano, pais: pais, preco: preco}
    ]);

    setInstrumento('');
    setAno('');
    setPais('');
    setPreco('');

    instrumentRef.current.focus()
  }

  return(
    <>
      <h2>Instrumentos</h2>

      <form>
        <input ref={instrumentRef} name="instrumento" value={instrumento} onChange={handleInstrumentInputChange} onKeyDown={focusYearInput} placeholder="instrumento"></input>
        <br />
        <input ref={yearRef} name="ano" value={ano} onChange={handleYearInputChange} onKeyDown={focusCountryInput} placeholder="ano"></input>
        <br />
        <input ref={countryRef} name="pais" value={pais} onChange={handleCountryInputChange} onKeyDown={focusPriceInput} placeholder="pais"></input>
        <br />        
        <input ref={priceRef} name="preco" value={preco} onChange={handlePriceInputChange} onKeyDown={focusSubmitButton} placeholder="preco"></input>
        <br />
        <button ref={buttonRef} type="button" onClick={handleAddInstrument}>Adicionar</button>
      </form>


      <table>
        <thead>
          <tr>
            <th>Instrumento</th>
            <th>Ano</th>
            <th>País</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>flauta</td>
            <td>1965</td>
            <td>Brasil</td>
            <td>R$ 2000,00</td>
          </tr>
          {instrumentos.map(item => (
            <tr key={item.id}>
              <td>{item.instrumento}</td>
              <td>{item.ano}</td>
              <td>{item.pais}</td>
              <td>{`R$ ${item.preco},00`}</td>
            </tr>
          ))}  
        </tbody>
      </table>
    </>

  );

}

export default Instrumentos;
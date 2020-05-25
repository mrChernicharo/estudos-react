import React, { useState } from 'react';




function App() {

  
  const [songs, setSongs] = useState([
    {id: 1, name: 'feira de mangaio'},
    {id: 2, name: 'onde está você'},
  ]);

  function handleAddSong() {
    setSongs([...songs, {id: Math.random(), name: 'nova música'}])
  }


  return (
    <>
      <h2>Hello</h2>

      <ul>
        { songs.map(song => <li key={song.id}>{song.name}</li>) }
      </ul>
      <button onClick={handleAddSong}>Adicionar Música</button>
      <br />
      <button onClick={()=> console.log(songs)}>Console Lista</button>
    </>

  );
}

export default App;

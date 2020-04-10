import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Data from './components/Data';

function App() {

  const [players, setPlayers] = useState([]);
  useEffect(() =>
    axios.get("http://localhost:5000/api/players")
      .then(response => {
        console.log(response.data)
        setPlayers(response.data)
      })
      .catch(error => {
        console.log("Error: ", error)
      }), [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Women's World Cup data trends</h1>
      </header>
      <div>
        <Data players={players} />
      </div>
    </div>
  );
}

export default App;

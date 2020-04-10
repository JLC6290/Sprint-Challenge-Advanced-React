import React, { useEffect, useState } from 'react';
import useDarkMode from './hooks/useDarkMode';
import axios from 'axios';
import Data from './components/Data';

function App() {

  const [players, setPlayers] = useState([]);
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = event => {
    event.preventDefault();
    setDarkMode(!darkMode);
  };

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
        <div className="dark-mode__toggle">
          <button
            className="dark-button"
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          >Dark Mode</button>
        </div>
        <h1>Women's World Cup data trends</h1>
      </header>
      <div>
        <Data players={players} />
      </div>
    </div>
  );
}

export default App;

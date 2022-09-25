import './App.css';
import React, { useState } from 'react';
import axios from 'axios'

function App() {
  const [input, setCount] = useState(0);
  
  const handleClick = () => {
   console.log('test')
  
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Api request</button>
        <input></input>
      </header>
    </div>
  );
}

export default App;

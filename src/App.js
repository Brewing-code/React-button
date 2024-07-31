// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [buttonAdded, setButtonAdded] = useState(false);

  const addButtonToDOM = () => {
    setButtonAdded(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="root">
          {buttonAdded && (
            <button className="btn">ETIQUETA</button>
          )}
        </div>
        <button onClick={addButtonToDOM}>Add Button</button>
      </header>
    </div>
  );
}

export default App;

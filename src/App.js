import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const buttonContainerRef = useRef(null);

  useEffect(() => {
    function createButton() {
      const button = document.createElement('button');
      const label = document.createTextNode('ETIQUETA');
      button.appendChild(label);
      button.classList.add('btn');
      return button;
    }

    if (buttonContainerRef.current) {
      const button = createButton();
      buttonContainerRef.current.appendChild(button);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div ref={buttonContainerRef}></div> {/* Contenedor para el botón */}
      </header>
    </div>
  );
}

export default App;

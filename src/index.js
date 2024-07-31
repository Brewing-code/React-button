import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot en lugar de ReactDOM
import App from './App';
import './index.css';

// Obtén el elemento root
const container = document.getElementById('root');

// Crea la raíz de React
const root = createRoot(container);

// Renderiza la aplicación en la raíz
root.render(<App tab="home" />);

// JavaScript puro para agregar el botón
function createButton() {
  const button = document.createElement('button');
  const label = document.createTextNode('ETIQUETA');
  button.appendChild(label);
  button.classList.add('btn');
  return button;
}

// Asegúrate de que el botón se añada después de la renderización inicial de React
window.onload = () => {
  const button = createButton();
  container.appendChild(button);
};

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Obtén el elemento root
const container = document.getElementById('root');

// Crea la raíz de React
const root = createRoot(container);

// Renderiza la aplicación en la raíz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

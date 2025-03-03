// src/App.js
import React from 'react';
import Calculator from './components/Calculator/Calculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
      </header>
      <main>
        <Calculator />
      </main>
      <footer>
        <p>Simple React Calculator - Responsive Design</p>
      </footer>
    </div>
  );
}

export default App;
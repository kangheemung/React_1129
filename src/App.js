import React from "react";
import StateTutorial from './components/StateTutorial';
import RefTutorial from './components/RefTutorial';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <StateTutorial />
        <RefTutorial />
      </div>{/* Corrected Component Name */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

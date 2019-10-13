import React from 'react';
import './App.css';
import MicroFrontend from './MicroFrontend';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Microfrontends</h1>
      </header>
      <div className="row">
        <div className="column">
          <div className="card">
            <MicroFrontend name="Search" path="search" />
          </div>
        </div>
        <div className="column">
          <div className="card">
            <MicroFrontend name="Campaign" path="campaign" />
          </div>
        </div>
        <div className="column">
          <div className="card">
            <MicroFrontend name="Sale" path="sale" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

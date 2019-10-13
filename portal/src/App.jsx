import React, { useState } from 'react';
import './App.css';
import MicroFrontend from './MicroFrontend';


const users = ['Franzikarrr', 'Fredi'];

function App() {

  const [user, setUser] = useState(users[1]);

  const switchUser = (e) =>  {
    e.preventDefault();
    const nextIndex = (user === users[0]) ? 1 : 0;
    setUser(users[nextIndex]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Microfrontends</h1>
      </header>
      <div className="row">
        <div className="column">
          <div className="card">
            <MicroFrontend path="search" user={user} />
          </div>
        </div>
        <div className="column">
          <div className="card">
            <MicroFrontend path="campaign" user={user} />
          </div>
        </div>
        <div className="column">
          <div className="card">
            <MicroFrontend path="sale" user={user} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column footer">
          <a href="#" onClick={switchUser}>Switch User</a>
        </div>
      </div>
    </div>
  );
}

export default App;

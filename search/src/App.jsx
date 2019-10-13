import React, {useState} from 'react';
import './App.css';

function App({ user }) {

  const [query, setQuery] = useState('');

  const handleChange = e => {
    
    const newValue = e.target.value;
    if (newValue.length <= 20) {
      setQuery(newValue)
    }
  }

  return (
    <div className="App">
      <h2>Search</h2>
      <p>Search for the newest books in the store</p>
      <input value={query} onChange={handleChange} />
      {query && <p>Your are searching for '<i>{query}</i>'</p>}
      <p><small>Currently Logged in User is <strong>{user}</strong></small></p>
    </div>
  );
}

export default App;

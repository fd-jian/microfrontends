import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


window.mount.Search = () => {
    const MyComponent = 'App'
    ReactDOM.render(<MyComponent />, document.getElementById('Search-container'));
};

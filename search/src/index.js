import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const SEARCH_APP = 'search-app';

class SearchApp extends HTMLElement {

  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    //const name = this.getAttribute('name');
    //const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
    ReactDOM.render(<App />, mountPoint);
  }
}

customElements.define(SEARCH_APP, SearchApp);

if (window.createMount) {
  window.createMount('Search', SEARCH_APP);
}
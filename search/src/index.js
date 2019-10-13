import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const SEARCH_APP = 'search-app';


class SearchApp extends HTMLElement {

  connectedCallback() {
    const mountPoint = document.createElement('span');
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(mountPoint);

    // https://github.com/facebook/react/issues/9242#issuecomment-534096832
    Object.defineProperty(mountPoint, "ownerDocument", { value: shadowRoot });

    const mapDocumentMethods = (methods) => {
      methods.forEach(f => {
        shadowRoot[f] = (...args) => document[f](...args);  
      });  
    }

    mapDocumentMethods([
      'createElement',
      'createTextNode'
    ]);

    ReactDOM.render(<App />, mountPoint);
  }
}

customElements.define(SEARCH_APP, SearchApp);

if (window.createMount) {
  window.createMount('Search', SEARCH_APP);
}
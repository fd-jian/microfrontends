import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class SearchApp extends HTMLElement {

  static observedAttributes = ['user']

  connectedCallback() {
    this.mountPoint = document.createElement('span');
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(this.mountPoint);

    // https://github.com/facebook/react/issues/9242#issuecomment-534096832
    Object.defineProperty(this.mountPoint, "ownerDocument", { value: shadowRoot });

    const mapDocumentMethods = (methods) => {
      methods.forEach(f => {
        shadowRoot[f] = (...args) => document[f](...args);  
      });  
    }

    mapDocumentMethods([
      'createElement',
      'createTextNode'
    ]);

    this.mount();
  }
  
  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.mountPoint);
  }

  attributeChangedCallback(name) {
    console.log('attributeChangedCallback', name)
    if (name === 'user') {
      this.mount();
    } 
  }

  mount() {
    ReactDOM.render(
      <App user={this.getAttribute('user')}/>, 
      this.mountPoint
    );
  }

  set user(user) {
    this.setAttribute('user', user);
  }

  get user() {
    return this.getAttribute('user');
  }

}

customElements.define('search-app', SearchApp);

const template = document.createElement('template');
template.innerHTML = `
      <div>
        <h2>Current Sales</h2>
        <ul>
          <li>Spring for Starters</li>
          <li>Advanced React</li> 
      </div>
    `;

class Sale extends HTMLElement {

  connectedCallback() {
    this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true));
  }
} 

const SALE_APP = 'sale-component';

window.customElements.define(SALE_APP, Sale);

if (window.createMount) {
  window.createMount('Sale', SALE_APP);
}



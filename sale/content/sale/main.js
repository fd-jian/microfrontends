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

window.customElements.define('sale-component', Sale);


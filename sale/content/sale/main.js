
class Sale extends HTMLElement {

  constructor() {
    super();

    this.innerHTML = `
      <div>
        <h2>Current Sales</h2>
        <ul>
          <li>Spring for Starters</li>
          <li>Advanced React</li> 
      </div>
    `;
  }
} 


window.customElements.define('sale-component', Sale);

if (!window.mount) {
  window.mount = {};
}

window.mount.Sale = () => {
  document.querySelector('#Sale-container').innerHTML = 
    '<sale-component></sale-component>';
}



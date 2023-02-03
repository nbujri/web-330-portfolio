// Title: footer.js
// Author: Ngi Bujri
// Date: 3 February 2023
// Description: Footer component

class Footer extends HTMLElement {
  constructor() {
    super();

    const footer = `
    <footer class="footer">
      <div>
        Developed by <a href="https://github.com/nbujri/web-330-portfolio" target="_blank">Ngi Bujri</a>
      </div>
    </footer>
    `;

    this.innerHTML = footer;
  }
}

customElements.define("page-footer", Footer);

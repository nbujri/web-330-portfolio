// Title: header.js
// Author: Ngi Bujri
// Date: 3 February 2023
// Description: Header component

class Header extends HTMLElement {
  constructor() {
    super();

    const header = `
    <header class="header">
      <div class="logo">Ngi Bujri</div>
      <nav class="nav-links">
        <a href="/" class="nav-link">Home</a>
        <a href="#" class="nav-link">Resume</a>
        <a href="#" class="nav-link">Projects</a>
        <a href="#" class="nav-link">DB Diagrams</a>
        <a href="#" class="nav-link">API Unit Tests</a>
        <a href="#" class="nav-link">Bucket List</a>
        <a href="#" class="nav-link">About</a>
      </nav>
    </header>
    `;

    this.innerHTML = header;
  }
}

customElements.define("page-header", Header);

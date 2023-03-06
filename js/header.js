// Title: header.js
// Author: Ngi Bujri
// Date: 3 February 2023
// Description: Header component

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="header">
      <h1 class="logo">Ngi Bujri</h1>
      <nav class="nav-links">
        <a href="./index.html" class="nav-link">Home</a>
        <a href="./resume.html" class="nav-link">Resume</a>
        <a href="./projects.html" class="nav-link">Projects</a>
        <a href="./db-diagrams.html" class="nav-link">DB Diagrams</a>
        <a href="./api-unit-tests.html" class="nav-link">API Unit Tests</a>
        <a href="./about.html" class="nav-link">About</a>
      </nav>
    </header>
    `;
  }
}

customElements.define("page-header", Header);

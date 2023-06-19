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
        <a href="/web-330-portfolio/index.html" class="nav-link">Home</a>
        <a href="/web-330-portfolio/resume.html" class="nav-link">Resume</a>
        <a href="/web-330-portfolio/projects.html" class="nav-link">Projects</a>
        <a href="/web-330-portfolio/db-diagrams.html" class="nav-link">DB Diagrams</a>
        <a href="/web-330-portfolio/api-unit-tests.html" class="nav-link">API Unit Tests</a>
        <a href="/web-330-portfolio/about.html" class="nav-link">About</a>
        <a href="/web-330-portfolio/web-430/bujri-tech-value-stream.html" class="nav-link">DevOps</a>
      </nav>
    </header>
    `;
  }
}

customElements.define("page-header", Header);

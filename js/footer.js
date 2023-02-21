// Title: footer.js
// Author: Ngi Bujri
// Date: 3 February 2023
// Description: Footer component

class Footer extends HTMLElement {
  constructor() {
    super();

    const footer = `
    <footer class="footer">
      <div class="footer-top">
        <div class="quick-links">
          <a href="https://github.com/nbujri?tab=repositories" target="_blank">My GitHub Repositories</a>
          <a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/" target="_blank">Bellevue University Web Development Degree</a>
          <a href="https://www.youtube.com/@bellevueuniversity" target="_blank">Bellevue University YouTube</a>
          <a href="https://github.com/buwebdev" target="_blank">Bellevue University GitHub</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="credit">
          Developed by Ngi Bujri
        </p>
      </div>
    </footer>
    `;

    this.innerHTML = footer;
  }
}

customElements.define("page-footer", Footer);

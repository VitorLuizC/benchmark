import './view/index.pug';
import './style/index.styl';
import highlight from 'highlight.js';
import comparitions from './comparitions.js';

comparitions.forEach(comparition => renderComparition(comparition));

highlightBlocks();

/**
 * Highlight code blocks.
 */
function highlightBlocks() {
  let node = document.querySelectorAll('.code');
  let blocks = Array.from(node);

  blocks.forEach(block => highlight.highlightBlock(block));
}


/**
 * @typedef Syntax
 * @property {string} language
 * @property {string} code
 */

/**
 * @typedef Comparition
 * @property {string} subject
 * @property {string} description
 * @property {Array.<Syntax>} syntaxes
 */

/**
 * Render comparition on <body>.
 * @param {Comparition} comparition
 */
function renderComparition(comparition) {
  const container = document.querySelector('#benchmark');

  const article = createElement(`
    <article class="comparition">
      <h3 class="subject">${comparition.subject}</h3>
    </article>
  `);

  if (comparition.description)
    comparition.description.split(/(\n|\r\n)/g).forEach(paragraph => {
      article.appendChild(createElement(`
        <p class="description">${paragraph}</p>
      `));
    });

  comparition.syntaxes.forEach(syntax => {
    article.appendChild(createElement(`
      <figure class="syntax">
        <figcaption class="about">
          <span class="language">${syntax.language}</span>
        </figcaption>
        <pre class="code ${syntax.language}">${syntax.code}</pre>
      </figure>
    `));
  });

  container.appendChild(article);
}

/**
 * Create HTML Structure and return it.
 * @param {string} html HTML String wrapped into a single element.
 * @returns {HTMLElement}
 */
function createElement(html) {
  const container = document.createElement('div');

  container.innerHTML = html.trim();

  return container.firstChild;
}

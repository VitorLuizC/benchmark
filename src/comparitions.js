/**
 * Format code by removing indentation spaces and first line break.
 * @param {string} code
 * @returns {string}
 */
const format = code => code.replace(/^(\r\n|\n)/, '').replace(/\ \ /g, '');

const comparitions = [
  {
    subject: 'Variáveis & valores',
    syntaxes: [
      {
        language: 'scss',
        code: format(`
          $size: 1.2rem;
        `)
      },
      {
        language: 'stylus',
        code: format(`
          size = 1.2rem

          // Syntaxe deselegante
          $size = 1.2rem;
        `)
      }
    ]
  }
];

export default comparitions;

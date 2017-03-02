const express = require('express');

/**
 * Express instance.
 * @type {Express}
 */
const app = express();

/**
 * Application configuration.
 */
const config = {
  static: express.static('./dist'),
  port: process.env.PORT || 8080,
  host: '127.0.0.1',
  callback() {
    console.log(`
      Application was started!
      Application is listening at http://${config.host}:${config.port}/.
    `);
  }
};

app
  .use(config.static) // Serve static content
  .listen(config.port, config.host, config.callback);

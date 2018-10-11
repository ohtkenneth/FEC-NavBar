require('newrelic');
const app = require('./app');
const { port } = require('../config');
const http = require('http');

const PORT = port;

app.listen(PORT, () => {
  console.log(`Proxy server listening on ${PORT}`);
});
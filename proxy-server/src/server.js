const app = require('./app');
const { port } = require('../config');

const PORT = port;

app.listen(PORT, () => {
  console.log(`Proxy server listening on ${PORT}`);
});
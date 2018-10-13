require('dotenv').config();
const app = require('./app');
const config = require('../config');

const PORT = config.port;

console.log('config', config);
app.listen(PORT, () => {
  console.log(`Redis listening on ${PORT}`);
});
const app = require('./index');
const config = require('../config').app;

const PORT = config.port || 3000;

app.listen(PORT, () => {
  console.log('listening to port: ', PORT);
});
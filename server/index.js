require('dotenv').config();

const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');

const config = require('../config').app;
const router = require('./routes.js');
const app = express();

console.log(config);

const PORT = config.port || 3000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cors());
app.use('/product', router);

app.use(express.static(path.resolve(__dirname, '../static/')));

app.listen(PORT, () => {
  console.log('listening to port: ', PORT);
});

require('newrelic');
require('dotenv').config();
const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const app = express();

const config = require('../config');
const router = require('./router');
const PORT = config.appPort;

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'dev') {
  app.use(morgan('dev'));
}
// app.use(morgan('dev'));

app.use('/product', router);

app.get('/loader*', (req, res) => {
  res.send('loaderio-8478e392d21d5d6f22aaf0c2da837add');
});


app.listen(PORT, () => {
  console.log('config', config);
  console.log('MongoDB server listening on', PORT);
});
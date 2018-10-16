const path = require('path');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const config = require('../config');
const router = require('./router');

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// if (process.env.NODE_ENV === 'dev') {
//   app.use(morgan('dev'));
// }
// app.use(morgan('dev'));

app.use('/', router);

// loader io verification
app.get('/loader*', (req, res) => {
  res.send('loaderio-95d1127cce0c62f13b15f7963fefa0e0');
});

module.exports = app;
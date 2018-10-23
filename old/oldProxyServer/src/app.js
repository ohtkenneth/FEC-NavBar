require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const axios = require('axios');

const app = express();
const router = require('./router');
const { cacheIp, cachePort } = require('../config');

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'dev') {
  app.use(morgan('dev'));
}

app.use('/product', router);

// loader io verification
app.get('/loaderio*', (req, res) => {
  res.send('loaderio-95d1127cce0c62f13b15f7963fefa0e0');
});

// route to caching server
const options = {
  url: `http://${cacheIp}:${cachePort}`,
  method: 'get',
};

app.get('/', (req, res) => {
  axios(options)
  .then(response => {
    res.end(response.data);
  })
  .catch(err => console.log(err));
});

module.exports = app;
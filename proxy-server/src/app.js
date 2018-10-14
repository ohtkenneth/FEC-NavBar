require('dotenv').config();

const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const axios = require('axios');

const app = express();
const router = require('./router');
const { serviceIp, servicePort, cacheIp, cachePort } = require('../config');

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

const url = 'http://54.183.254.162:1337';
// route to caching server
app.get('/', (req, res) => {
  // res.send('hello world!')
  const options = {
    url,
    method: 'get',
    proxy: {
      host: '54.67.89.152',
      port: 80,
    },
  }
  axios(options)
    .then(response => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(err => console.error(err));
});

module.exports = app;
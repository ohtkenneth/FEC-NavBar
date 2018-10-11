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
const { loadBalancerIp, loadBalancerPort } = require('../config');

console.log(serviceIp, servicePort);

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(morgan('dev'));

app.use('/product', router);

// loader io verification
app.get('/loaderio*', (req, res) => {
  res.send('loaderio-c3b2f8e94047df7d5b796070a000d64f');
})

// route index to service that will SSR
app.get('/', (req, res) => {
  // get service SSR
  const options = {
    url: `http://${loadBalancerIp}:${loadBalancerPort}`,
    method: 'get',
  };

  axios(options)
    .then(results => {
      // send ssr html to client
      res.send(results.data);
    })
    .catch(err => {
      console.log('ERROR from axios get service', err);
    })
});

module.exports = app;
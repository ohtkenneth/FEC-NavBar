const router = require('express').Router();
const axios = require('axios');
const { serviceIp, servicePort } = require('../config');

// default options for axios calls
const options = {
  url: `https://${serviceIp}:${servicePort}/ads`,
};

router.route('/ads')
  .get((req, res) => {
    options.method = 'get'

    axios(options)
      .then(results => {
        console.log(results);
        res.send(results);
      })
      .catch(err => {
        console.log('ERROR from get', err);
      })
  })
  .post((req, res) => {
    options.method = 'post';

    axios(options)
      .then(results => {
        console.log(results);
        res.send(results);
      })
      .catch(err => {
        console.log('ERROR from post', err);
      });
  })
  .put((req, res) => {
    options.method = 'put';

    axios(options)
      .then(results => {
        console.log(results);
        res.send(results);
      })
      .catch(err => {
        console.log('ERROR from put', err);
      })
  })
  .delete((req, res) => {
    options.method = 'delete'

    axios(options)
      .then(results => {
        console.log(results);
        res.send(results);
      })
      .catch(err => {
        console.log('ERROR from delete', err);
      })
  });

module.exports = router;
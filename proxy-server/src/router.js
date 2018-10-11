const router = require('express').Router();
const axios = require('axios');
const { serviceIp, servicePort } = require('../config');

// default options for axios calls
const options = {
  url: `http://${serviceIp}:${servicePort}/product/ads`,
};

router.route('/ads')
  .get((req, res) => {
    options.method = 'get'

    res.send('Testing proxy');

    // axios(options)
    //   .then(results => {
    //     // console.log('proxy get success');
    //     res.send(results.data);
    //   })
    //   .catch(err => {
    //     console.log('ERROR from get', err);
    //   })
  })
  .post((req, res) => {
    options.method = 'post';
    console.log(req.body);
    options.data = req.body;

    axios(options)
      .then(results => {
        console.log('proxy post success');
        res.send(results.data);
      })
      .catch(err => {
        console.log('ERROR from post', err);
      });
  })
  .put((req, res) => {
    options.method = 'put';

    axios(options)
      .then(results => {
        console.log('proxy put success');
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
        console.log('delete success');
        res.send(results);
      })
      .catch(err => {
        console.log('ERROR from delete', err);
      })
  });

module.exports = router;
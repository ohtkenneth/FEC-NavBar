require('dotenv').config();
const express = require('express');
const axios = require('axios');
const router = express.Router();
const { findAd, createAd } = require('../db/models');

// create config file here since experiencing trouble importing config 
// once server bundle is created
// env vars should be coming from .env during dev and Docker during testing
const env = process.env.NODE_ENV;
const config = {
  dev: {
    dbIp: process.env.DEV_DB_SERVER_IP,
    dbPort: process.env.DEV_DB_PORT,
  },
  test: {
    dbIp: process.env.TEST_DB_SERVER_IP,
    dbPort: process.env.TEST_DB_PORT,
  },
};

console.log(env, config);
// default url for api
// need to set SOME PROTOCOL e.g. http
// dbPort refers to the node js port running
const options = {
  url: `http://${ config[env].dbIp }:${ config[env].dbPort }/product/ads`,
};
// axios requests to db server
// set methods on options as well

router.route('/ads')
  .get((req, res) => {
    // get method expects query string with id
    // const randId = Math.floor(Math.random() * (10000000 - 9000000 + 1)+9000000);

    // need to cast id to number
    findAd(+req.query.id)
      .then(result => {
        // console.log(result);
        res.send(result)
      })
      .catch(err => {
        console.log('err from service db', err);
      })

    // axios(options)
    //   .then(results => {
    //     // console.log('service get succcess');
    //     res.send(results.data);
    //   })
    //   .catch(err => console.log('ERROR from get', err));
  })
  .post((req, res) => { 
    options.method = 'post';
    // console.log('req body from service', req.body);
    options.data = req.body;
    // get post
    axios(options)
      .then(results => {
        // console.log('service post success');
        res.send(results.data);
      })
      .catch(err => console.log('err from service post', err));
  })
  .put((req, res) => {
    options.method = 'put';
  })
  .delete((req, res) => {
    options.method = 'delete';
  });

module.exports = router;
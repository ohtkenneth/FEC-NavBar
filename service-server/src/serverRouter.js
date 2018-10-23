require('dotenv').config();
const express = require('express');
const axios = require('axios');
const router = express.Router();
const { findAd, createAd } = require('../db/models');

// create config file here since experiencing trouble importing config 
// once server bundle is created
// env vars should be coming from .env during dev and Docker during testing
const env = process.env.NODE_ENV;

router.route('/ads')
  .get((req, res) => {
    // need to cast id to number
    findAd(+req.query.id)
      .then(result => {
        res.send(result)
      })
      .catch(err => {
        console.log('err from service db', err);
      });
  })
  .post((req, res) => { 
    options.method = 'post';
    options.data = req.body;

    axios(options)
      .then(results => {
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
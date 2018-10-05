require('dotenv').config();
import express from 'express';
import axios from 'axios';
const router = express.Router();

// create config file here since experiencing trouble importing config 
// once server bundle is created
// env vars should be coming from .env during dev and Docker during testing
const env = process.NODE_ENV;
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
// default url for api
// const options = {
//   url: `https://${ config[env].dbIp }:${ config[env].dbPort }/product/ads`,
// };
// axios requests to db server
// set methods on options as well
console.log(config);
router.route('/ads')
  .get((req, res) => {
    // get method expects query string with id
    options.method = 'get';
    options.url += '?id=5';

    axios(options)
      .then(results => {
        console.log(results);
        res.send(results.data);
      })
      .catch(err => console.log('ERROR from get', err));
  })
  .post((req, res) => { 
    options.method = 'post';
  })
  .put((req, res) => {
    options.method = 'put';
  })
  .delete((req, res) => {
    options.method = 'delete';
  });

export default router;
const redis = require('./redis');
const axios = require('axios');
const { balancerIp, balancerPort } = require('../config');
// default axios options to load balancer
const options = {
  getIndex: {
    url: `http://${balancerIp}:${balancerPort}`,
    method: 'get',
  },
  getAd: {
    url: `http://${balancerIp}:${balancerPort}/product/ads`,
    method: 'get',
  },
  postAd: {
    url: `http://${balancerIp}:${balancerPort}/product/ads`,
    method: 'post',
  },
};

module.exports = {
  async getIndex(req, res) {
    // check if index file is in cache
    const indexFile = await cache.get('index');

    if (indexFile) {
      res.send(indexFile);
    } else {
      const response = await axios(options.getIndex);

      res.send(response.data);
      cache.set('index', response.data);
    }
  },
  async getAd(req, res) {
    // check if ad is in cache
    const { id } = req.query;
    const result = await cache.get(id);

    if (result) {
      // send cached
      res.send(JSON.parse(result));
    } else {
      options.getAd.params = { id };
      const response = await axios(options.getAd);
      // send response from load balancer
      res.send(response.data);

      cache.set(id, JSON.stringify(response.data));
    }
  },
  postAd(req, res) {
    // route straight to load balancer
    options.postAd.data = req.body;

    axios(options)
      .then(results => {
        res.send(results.data);
      })
      .catch(err => console.log('Error from post redis', err));
  }
};

const cache = {
  get(key) {
    return new Promise((resolve, reject) => {
      redis.get(key, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      })
    });
  },
  set(key, value) {
    return new Promise((resolve, reject) => {
      redis.set(key, value, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
};
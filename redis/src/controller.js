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
}
console.log('default options', options);
module.exports = {
  async getIndex(req, res) {
    console.log('getting index')
    // check if index file is in cache
    const indexFile = await cache.get('index');

    if (indexFile) {
      console.log('cached')
      res.send(indexFile);
    } else {
      // query loadbalancer
      console.log('getting load');
      const response = await axios(options.getIndex);

      res.send(response.data);
      cache.set('index', JSON.stringify(response.data));
    }
  },
  async getAd(req, res) {
    // check if ad is in cache
    const { id } = req.query;
    console.log('getting id', id);
    const result = await cache.get(id);

    if (result) {
      // send cached
      res.send(result);
    } else {
      options.getAd.params = { id };
      const response = await axios(options.getAd);
      console.log('res', response.data);
      // send response from load balancer
      res.send(response.data);

      // save to cache
      cache.set(id, JSON.stringify(reponse.data));
    }
  },
  postAd(req, res) {
    // route straight to load balancer
    options.postAd.data = req.body;

    axios(options)
      .then(results => {
        console.log('post data from redis', results.data);
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
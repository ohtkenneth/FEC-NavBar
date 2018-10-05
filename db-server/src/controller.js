// need to require db here since mongoModels does not require db
// separate mongo connection to test models
const db = require('../db/index.js');
const mongoModels = require('../db/models');

const controller = {
  fetchAd: (req, res) => {
    console.log('here is the req in controller', req.query);
    // get rand int from 9million to 10million
    let randId = Math.floor(Math.random() * (10000000 - 9000000 + 1)+9000000);
    const { id } = req.query;
    console.log(id);
    mongoModels.findAd(randId)
      .then(result => {
        console.log(result);
        res.send(result);
      })
      .catch(err => console.log('ERROR in findAd', err));
    
  },
  fetchAds: (req, res) => {
    // gets range of documents
  },
  createAd: (req, res) => {
    // mongobd
    // req.body contains schema
    const { id, location, size, brand, season, url } = req.body;
    mongoModels.createAd(id, location, size, brand, season, url)
      .then(result => {
        console.log('mongo doc create result', result);
        res.send(result);
      })
      .catch(err => console.log('ERROR in createAd', err));
  },
  updateAd: (req, res) => {
    // id is query params
    const { id, location, size, brand, season, url } = req.body;

    mongoModels.updateAd(id, { location, size, brand, season, url })
      .then(result => {
        console.log('updateAd result', result);
        res.send(result)
      })
      .catch(err => console.log('ERROR from controller', err));
  },
  deleteAd: (req, res) => {
    // get id from body
    const { id } = req.body;

    mongoModels.deleteAd(id)
      .then(result => {
        console.log('deleteAd result', result);
        res.send(result);
      })
      .catch(err => console.log(err));
  }
};

module.exports = controller;

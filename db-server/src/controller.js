// need to require db here since mongoModels does not require db
// separate mongo connection to test models
const db = require('../db/index.js');
const mongoModels = require('../db/models');

const controller = {
  fetchAd: (req, res) => {
    // get rand int from 9million to 10million
    let randId = Math.floor(Math.random() * (10000000 - 9000000 + 1)+9000000);
    const { id } = req.query;
    // console.log(id);
    // console.log('getting rand id', randId);
    mongoModels.findAd(randId)
      .then(result => {
        // console.log(result);
        // console.log('mongo find success');
        res.send(result);
      })
      .catch(err => console.log('ERROR in findAd', err));
  },
  fetchAds: (req, res) => {
    // gets range of documents
  },
  createAd: (req, res) => {
    // req.body contains schema
    const { id, location, size, brand, season, url } = req.body;
    console.log('req body from db', req.body);

    mongoModels.createAd(id, location, size, brand, season, url)
      .then(result => {
        // console.log('mongo create success');
        res.send(result);
      })
      .catch(err => console.log('ERROR in createAd', err));
  },
  updateAd: (req, res) => {
    // id is query params
    const { id, location, size, brand, season, url } = req.body;

    mongoModels.updateAd(id, { location, size, brand, season, url })
      .then(result => {
        console.log('mongo update success');
        res.send(result)
      })
      .catch(err => console.log('ERROR from controller', err));
  },
  deleteAd: (req, res) => {
    // get id from body
    const { id } = req.body;

    mongoModels.deleteAd(id)
      .then(result => {
        console.log('mongo delete success');
        res.send(result);
      })
      .catch(err => console.log(err));
  }
};

module.exports = controller;

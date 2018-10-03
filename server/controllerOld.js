// const db = require('../database/models.js');
// need to require db here since mongoModels does not require db
// separate mongo connection to test models
const db = require('../database/mongo/index.js');
const random = require('mongoose-simple-random');
const mongoModels = require('../database/mongo/models');
const pgModels = require('../database/postgres/models');

const controller = {
  fetch: (req, res) => {
    // db.search.count().exec((err, count) => {

    // })
    db.search
      .findRandom(req.query, {}, { limit: 10 }, (err, results) => {
        if (err) {
          console.log('sent a 404', err);
          res.status(404).send(err);
        } else {
          console.log('sent a 200');
          res.status(200).send(results);
        }
      })
      .limit(10);
    console.log('here is the req in controller', req.query);
  },
  fetchAds: (req, res) => {
    db.photo.find(req.query, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },
  post: (req, res) => {
    // mongobd
    // req.body contains schema
    // id, brand, search
    // let search = db.search;
    // new search(req.body).save((err, result) => {
    //   if (err) {
    //     res.status(404).send(err);
    //   } else {
    //     res.status(201).send(result);
    //   }
    // });

    // postgres
    const { brand, search } = req.body;
    pgModels.insertSearch({ brand, search })
      .then(result => {
        console.log('pg insert result', result);
        res.send(result);
      })
      .catch(err => {
        console.log('pg insert error', err);
      });
  },
  update: (req, res) => {
    // id is query params    
    let { id } = req.query;
    
    db.search.updateOne({ id }, { 
      search: 'searchTest',
      brand: 'brandTest',
    })
      .then(result => {
        console.log('PUT result', result);
        res.send(result);
      }).catch(err => console.log('ERROR from controller', err));
  },
  delete: (req, res) => {
    // get id from body
    const { id } = req.body;
    db.search.deleteOne({ id })
      .then(result => {
        console.log(result);
        res.send(result);
      })
      .catch(err => console.log(err));
    
  }
};

module.exports = controller;

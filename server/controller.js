const db = require('../database/models.js');

const controller = {
  fetch: (req, res) => {
    db.search.find(req.query).then((err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    });
    console.log('here is the req in controller', req.query);
  },
  post: (req, res) => {
    console.log('here is the req from post', req.body);
  }
};

module.exports = controller;

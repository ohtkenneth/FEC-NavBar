const mongoModels = require('../db/models');

const controller = {
  fetchAd: (req, res) => {
    const { id } = req.query;
    // cast id to integer for query
    mongoModels.findAd(+id)
      .then(result => {
        res.send(result);
      })
      .catch(err => console.log('ERROR in findAd', err));
  },
  createAd: (req, res) => {
    const { id, location, size, brand, season, url } = req.body;

    mongoModels.createAd(+id, location, size, brand, season, url)
      .then(result => {
        res.send(result);
      })
      .catch(err => console.log('ERROR in createAd', err));
  },
  updateAd: (req, res) => {
    const { id, location, size, brand, season, url } = req.body;

    mongoModels.updateAd(id, { location, size, brand, season, url })
      .then(result => {
        res.send(result)
      })
      .catch(err => console.log('ERROR in upateAd', err));
  },
  deleteAd: (req, res) => {
    // get id from body
    const { id } = req.body;

    mongoModels.deleteAd(id)
      .then(result => {
        res.send(result);
      })
      .catch(err => console.log('ERROR in deleteAd', err));
  }
};

module.exports = controller;

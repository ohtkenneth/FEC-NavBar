const router = require('express').Router();
const controller = require('./controller');

router.route('/ads')
  .get((req, res) => {
    controller.fetchAd(req, res);
  })
  .post((req, res) => {
    controller.createAd(req, res);
  })
  .put((req, res) => {
    controller.updateAd(req, res);
  })
  .delete((req, res) => {
    controller.deleteAd(req, res);
  });

module.exports = router;
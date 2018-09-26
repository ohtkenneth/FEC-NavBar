const controller = require('./controller.js');
const router = require('express').Router();

router
  .route('/searches')
  .get((req, res) => {
    console.log(req.query);
    controller.fetch(req, res);
  })
  .post((req, res) => {
    controller.post(req, res);
  })
  .put((req, res) => {
    controller.update(req, res);
  })
  .delete((req, res) => {
    controller.delete(req, res);
  })
router
  .route('/brands')
  .get((req, res) => {
    console.log(req.body);
    controller.fetch(req, res);
  })
  .post((req, res) => {
    controller.post(req, res);
  });
router
  .route('/')
  .get((req, res) => {
    controller.fetch(req, res);
  })
  .post((req, res) => {
    controller.post(req, res);
  });
router
  .route('/ads')
  .get((req, res) => {
    controller.fetchAds(req, res);
  })
  .post((req, res) => {
    controller.post(req, res);
  });
module.exports = router;

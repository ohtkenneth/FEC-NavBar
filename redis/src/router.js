const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.route('/')
.get(controller.getIndex);

router.route('/product/ads')
.get(controller.getAd);

module.exports = router;
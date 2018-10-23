require('dotenv').config();
import express from 'express';
import { findAd, createAd } from '../db/models';

const router = express.Router();

router.route('/ads')
  .get((req, res) => {
    // need to cast id to number
    findAd(+req.query.id)
      .then(result => {
        res.send(result)
      })
      .catch(err => {
        console.log('err from service db', err);
      });
  })
  .post((req, res) => {
    req.body.id = +req.body.id; 
    createAd(req.body)
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log('err from service create ad', err);
      })
  })
  .put((req, res) => {
    options.method = 'put';
  })
  .delete((req, res) => {
    options.method = 'delete';
  });

export default router;
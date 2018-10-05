import express from 'express';
const router = express.Router();

router.route('/ads')
  .get((req, res) => {
    res.send('this is coming from service server');
  })
  .post((req, res) => {
    
  })
  .put((req, res) => {
    
  })
  .delete((req, res) => {
    
  });

export default router;
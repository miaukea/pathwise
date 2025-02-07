import express from 'express';

const router = express.Router();
import trips from './trips/trip-index.js';


router.use('/trips', trips);
router.get('/', (req, res) => {
  res.json({ message: 'Hello Trip API!' });
  res.send({message: 'Hello Trip API!'})
});

export default router;

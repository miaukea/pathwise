import express from 'express';

const router = express.Router();
import tripIndexRouter from './trips/trip-index.js';


router.use('/trips', tripIndexRouter);
router.get('/', (req, res) => {
  res.json({ message: 'Hello Trip API!' });
});

export default router;

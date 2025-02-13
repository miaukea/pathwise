import express from 'express';
import authRoutes from "../authRoutes.js";

const router = express.Router();
import trips from './trips/trip-index.js';


router.use('/trips', trips);
router.use('/auth', authRoutes);

router.get('/', (req, res) => {
  res.json({ message: 'Hello Trip API!' });
});

export default router;

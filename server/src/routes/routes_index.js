import express from 'express';
import api from './api/trip_api_index.js';
import authRoutes from './authRoutes.js';

const router = express.Router();

router.use('/api', api);
router.use("/auth", authRoutes);

router.get('/', (req, res) => {
  res.send('Trips to the World!');
});

export default router;

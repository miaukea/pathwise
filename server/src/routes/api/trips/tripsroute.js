import express from 'express';
const router = express.Router();
import { Trip } from '../../../models/model_index.js';

router.get('/', async (req, res) => {
  try{
    const trip = await Trip.findAll();
  res.json(trip);
  }catch{
    res.status(500).json({message: error.message})
  }
});

export default router ;

import express from 'express';
const router  = express.Router();
import tripsRoutes from './trips.js';
import { allTrips } from '../../../controllers/trip_controller/tripcontroller.js';

router.use('/trips', tripsRoutes);
router.get('/', allTrips);


export default router

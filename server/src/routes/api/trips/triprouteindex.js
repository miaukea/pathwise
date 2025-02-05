import express from 'express';

import router from './tripsroute.js';
import { AllTrips } from '../../../controllers/trip_controller/tripcontroller.js';

router.use('/trips', router);
router.get('/trips', AllTrips);

const indextripRouter  = express.Router();
export { indextripRouter };

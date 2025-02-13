import { Router } from 'express';

const router = Router();
import { tripIndexRoutes } from './trips/trip-index.js';

router.use('/trips', tripIndexRoutes);
router.get('/', (req, res) => {  
  res.send({ message: 'Hello Trip API!' });
});

export { router as api };


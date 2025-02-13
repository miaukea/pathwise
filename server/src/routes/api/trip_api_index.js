
import { Router } from 'express';
import { authRoutes } from "./authRoutes.js";

const router = Router();
import { tripIndexRoutes } from './trips/trip-index.js';

router.use('/trips', tripIndexRoutes);
router.get('/', (req, res) => {  
res.send({ message: 'Hello Trip API!' });
router.use('/auth', authRoutes);
});

export { router as api };
import { Router } from 'express';
import { tripRoutes } from './trips_routes.js';

const router = Router();

// Prefix all routes defined trips_routes.js
router.use('/triproutes', tripRoutes);

export { router as tripIndexRouter };

import { Router } from 'express';
import { tripRoutes } from './trips_routes.js';

const router = Router();

// Prefix all routes defined in trips_routes.js
router.use('/', tripRoutes);

router.get('/', (req, res) => {  // Add req as the first parameter
    res.json({ message: 'Welcome to trip index' });
});

export { router as tripIndexRoutes };


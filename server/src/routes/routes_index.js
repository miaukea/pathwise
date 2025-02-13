import { Router} from 'express';
const router = Router();
import { api }  from './api/trip_api_index.js';

router.use('/api', api);
router.get('/', (req, res) => {
  res.send('Trips to the World!');
});

export default router;

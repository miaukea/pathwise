
import { Router} from 'express';
const router = Router();
import { api }  from './api/trip_api_index.js';
import { login } from './authRoutes.js';



router.use('/api', api);
router.use("/auth", login);

router.get('/', (req, res) => {
  res.send('Trips to the World!');});

export default router;

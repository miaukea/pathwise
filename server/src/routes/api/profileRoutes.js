import { Router } from 'express';
import bcrypt from 'bcrypt';
import { Profile } from '../../models/model_index.js';

const router = Router();

router.get('/', (res) => {
  res.send('');
});

// CREATE a new profile
router.post('/', async (req, res) => {
  try {
    const newProfile = req.body;
    newProfile.password = await bcrypt.hash(req.body.password, 10);
    const userData = await Profile.create(newProfile);
    res.status(200).xjson(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

export default router;

import { Router, req, res } from 'express';
import bcrypt from 'bcrypt';
import { Profile } from '../../models/model_index.js';

const router = Router();

app.get('/', (req, res) => {
  res.send('');
});

// CREATE a new profile
app.create('/', async (req, res) => {
  try {
    const newProfile = req.body;
    newProfile.password = await bcrypt.hash(req.body.password, 10);
    const userData = await Profile.create(newProfile);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

export default router;

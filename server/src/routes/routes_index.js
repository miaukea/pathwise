import express from 'express';

import { apitripRouter } from './api/trip_api_index.js';

apitripRouter.use('/', apitripRouter );

const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
  res.send('Trips to the World!');
});

export  { apiRouter };

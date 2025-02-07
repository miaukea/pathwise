import express from 'express';

import { indextripRouter } from './trips/triprouteindex.js';


const apitripRouter = express.Router();
apitripRouter.use('/api', indextripRouter);
apitripRouter.get('/api', (req, res) => {
  res.json({ message: 'Hello Trip API!' });
});

export { apitripRouter } ;

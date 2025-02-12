import { Router } from "express";
import profileRouter from './profileRoutes.ts';

const router = Router();

router.use('/profiles', profileRouter);

export default router;

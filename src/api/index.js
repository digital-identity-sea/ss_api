import express from 'express';
import path from 'path';
import profileRouter from './profile';
const router = express.Router();
router.use('/', express.static(path.join(__dirname, '../../doc')));
router.use('/profile', profileRouter);
export default router;

import express from 'express';
import path from 'path';
import profileRouter from './profile';
import encryptionRouter from './encryption';
const router = express.Router();
router.use('/', express.static(path.join(__dirname, '../../doc')));
router.use('/profile', profileRouter);
router.use('/encryption', encryptionRouter);
export default router;

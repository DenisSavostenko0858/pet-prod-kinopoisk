import express from 'express';

import userRouter from './userRout';
import adminRouter from './adminRout';

const router = express();

router.use('/user', userRouter);
router.use('/admin', adminRouter);

export default router;
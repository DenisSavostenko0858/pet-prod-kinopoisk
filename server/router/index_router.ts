import express from 'express';

import userRouter from './userRout';
import adminRouter from './adminRout';
import typeRouter from './typeRout';
import brandRouter from './brandRout';

const router = express();

router.use('/user', userRouter);
router.use('/admin', adminRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);

export default router;
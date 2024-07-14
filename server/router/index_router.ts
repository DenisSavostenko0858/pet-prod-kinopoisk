import express from 'express';

import userRouter from './userRout';

const router = express();

router.use('/user', userRouter);
router.get('/', (req, res) => {
    res.send('Hello, World!');
});

export default router;
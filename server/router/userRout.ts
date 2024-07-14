import Router from 'express';
const router = Router();

import userController from '../controllers/userController';
// const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
// router.get('/auth', authMiddleware, userController.chekUser);

export default router;
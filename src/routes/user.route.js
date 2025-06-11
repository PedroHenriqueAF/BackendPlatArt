import express from 'express';
import userController from '../controller/user.controller.js';
import verifyToken from '../middleware/jwt.token.middleware.js';

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile', verifyToken, userController.getProfile);

export default router;

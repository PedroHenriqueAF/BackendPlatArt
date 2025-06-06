import express from 'express';
import userController from '../controller/user.controller.js';

const router = express.Router();


router.post('/register', userController.register);


router.post('/login', userController.login);


router.get('/:identifier', userController.getUserByIdentifier);

export default router;

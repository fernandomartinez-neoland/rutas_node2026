import express from 'express'
import { userController, createUserController } from '../controllers/user.controller.js'

const router = express.Router();

export default router

router.post('/perfil', userController)
router.post('/newuser', createUserController)




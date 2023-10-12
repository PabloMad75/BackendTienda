import express from 'express'
import { authRequire } from '../middlewares/auth.middleware.js'
const router = express.Router()

import { createUser, deleteUserByEmail, getAllUsers, getUserByEmail, login, updateUser, verifyUser } from "../controllers/users.controller.js"

router.get('/users', getAllUsers)
router.post('/users', createUser)
router.put('/users/:mail', updateUser)
router.delete('/users/:mail', deleteUserByEmail)
router.get('/users/:mail', getUserByEmail)
router.post('/login', login)
router.get('/verify-token', authRequire, verifyUser)
export default router
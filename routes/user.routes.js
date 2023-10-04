import express from 'express'
const router = express.Router()

import { createUser, deleteUserByEmail, getAllUsers, getUserByEmail, login, updateUser } from "../controllers/users.controller.js"

router.get('/users', getAllUsers)
router.post('/users', createUser)
router.put('/users/:mail', updateUser)
router.delete('/users/:mail', deleteUserByEmail)
router.get('/users/:mail', getUserByEmail)
router.post('/login', login)
export default router
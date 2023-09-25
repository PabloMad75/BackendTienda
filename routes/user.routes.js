import express from 'express'
const router = express.Router()

import { createUser, getAllUsers } from "../controllers/users.controller.js"

router.get('/users', getAllUsers)
router.post('/users', createUser)
export default router
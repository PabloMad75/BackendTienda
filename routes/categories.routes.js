import express from 'express'
const router = express.Router()

import { getAllCategories } from "../controllers/categories,controller.js"

router.get('/categories', getAllCategories)

export default router
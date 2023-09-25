import express from 'express'
const router = express.Router()

import { createCategory, getAllCategories } from "../controllers/categories,controller.js"

router.get('/categories', getAllCategories)
router.post('/categories', createCategory)

export default router
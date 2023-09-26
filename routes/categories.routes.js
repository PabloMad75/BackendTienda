import express from 'express'
const router = express.Router()

import { createCategory, deleteCategoryByName, getAllCategories, getCategoryByName, updateCategoryByName } from "../controllers/categories,controller.js"

router.get('/categories', getAllCategories)
router.get('/categories/:name', getCategoryByName)
router.post('/categories', createCategory)
router.put('/categories/:name', updateCategoryByName)
router.delete('/categories/:name', deleteCategoryByName)

export default router
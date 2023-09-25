import express from 'express'
const router = express.Router()

import { createProduct, getAllProducts } from "../controllers/products.controller.js"

router.get('/products', getAllProducts)
router.post('/products', createProduct)

export default router
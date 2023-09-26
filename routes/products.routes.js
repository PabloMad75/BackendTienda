import express from 'express'
const router = express.Router()

import { createProduct, deleteProductByName, getAllProducts, getProductByName, updateProductByName } from "../controllers/products.controller.js"

router.get('/products', getAllProducts)
router.get('/products/:name', getProductByName)
router.post('/products', createProduct)
router.put('/products/:name', updateProductByName)
router.delete('/products/:name', deleteProductByName)

export default router
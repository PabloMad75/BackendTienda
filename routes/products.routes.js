import express from 'express'
const router = express.Router()

import { createProduct, deleteProductByName, getAllProducts, getProductById, updateProductByName } from "../controllers/products.controller.js"

router.get('/products', getAllProducts)
router.get('/products/:product_id', getProductById)
router.post('/products', createProduct)
router.put('/products/:name', updateProductByName)
router.delete('/products/:name', deleteProductByName)

export default router
import express from 'express'
const router = express.Router()

import { getAllProducts } from "../controllers/products.controller.js"

router.get('/products', getAllProducts)

export default router
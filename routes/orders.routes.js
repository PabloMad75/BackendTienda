import express from 'express'
import { createOrders, getAllOrders } from '../controllers/orders.controller.js'
const router = express.Router()

router.get('/orders', getAllOrders)
router.post('/orders', createOrders)

export default router
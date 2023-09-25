import express from 'express'
const router = express.Router()

import { createOrderStatus, getAllOrderStatus } from "../controllers/orderstatuses.controller.js"

router.get('/orderstatus', getAllOrderStatus)
router.post('/orderstatus', createOrderStatus)

export default router
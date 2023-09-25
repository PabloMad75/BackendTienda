import express from 'express'
const router = express.Router()

import { getAllOrderStatus } from "../controllers/orderstatuses.controller.js"

router.get('/orderstatus', getAllOrderStatus)

export default router
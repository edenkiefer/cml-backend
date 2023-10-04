import express from 'express'
import OrderController from '../controllers/OrderController.js'

const router = express.Router()

router
  .post('/orders', OrderController.createOrder)
  .get('/orders', OrderController.getOrders)
  .get('/orders/filter', OrderController.getFilteredOrders)
  .get('/orders/:id', OrderController.indexOrder)
  .put('/orders/:id', OrderController.updateOrder)
  .delete('/orders/:id', OrderController.deleteOrder)

export default router

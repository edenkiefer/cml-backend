import express from 'express'
import OrderController from '../controllers/OrderController.js'
import isAdmin from '../middlewares/isAdmin.js'

const router = express.Router()

router
  .post('/orders', OrderController.createOrder)
  .get('/orders', OrderController.getOrders)
  .get('/orders/filter', OrderController.getFilteredOrders)
  .get('/orders/:id', OrderController.indexOrder)
  .put('/orders/:id', OrderController.updateOrder)
  .delete('/orders/:id', isAdmin(), OrderController.deleteOrder)

export default router

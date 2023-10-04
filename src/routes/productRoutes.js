import express from 'express'
import ProductController from '../controllers/ProductController.js'

const router = express.Router()

router
  .post('/products', ProductController.createProduct)
  .get('/products', ProductController.getProducts)
  .get('/products/:id', ProductController.indexProduct)
  .put('/products/:id', ProductController.updateProduct)
  .delete('/products/:id', ProductController.deleteProduct)

export default router

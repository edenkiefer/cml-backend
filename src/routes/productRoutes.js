import express from 'express'
import ProductController from '../controllers/ProductController.js'
import isAdmin from '../middlewares/isAdmin.js'

const router = express.Router()

router
  .post('/products', isAdmin(), ProductController.createProduct)
  .get('/products', ProductController.getProducts)
  .get('/products/:id', isAdmin(), ProductController.indexProduct)
  .put('/products/:id', isAdmin(), ProductController.updateProduct)
  .delete('/products/:id', isAdmin(), ProductController.deleteProduct)

export default router

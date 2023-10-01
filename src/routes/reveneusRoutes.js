import express from 'express'
import ReveneusController from '../controllers/ReveneusController.js'

const router = express.Router()

router
  .post('/reveneus', ReveneusController.createReveneu)
  .get('/reveneus', ReveneusController.getReveneus)
  .get('/reveneus/:id', ReveneusController.indexReveneu)
  .put('/reveneus/:id', ReveneusController.updateReveneu)
  .delete('/reveneus/:id', ReveneusController.deleteReveneu)

export default router

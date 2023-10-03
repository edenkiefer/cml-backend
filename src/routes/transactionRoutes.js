import express from 'express'
import TransactionController from '../controllers/TransactionController.js'

const router = express.Router()

router
  .post('/transactions', TransactionController.createTransaction)
  .get('/transactions', TransactionController.getTransactions)
  .get('/transactions/:id', TransactionController.indexTransaction)
  .put('/transactions/:id', TransactionController.updateTransaction)
  .delete('/transactions/:id', TransactionController.deleteTransaction)

export default router

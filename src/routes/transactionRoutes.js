import express from 'express'
import TransactionController from '../controllers/TransactionController.js'

const router = express.Router()

router
  .post('/transactions', TransactionController.createTransaction)
  .get('/transactions', TransactionController.getTransactions)
  .get('/transactions/filter', TransactionController.getFilteredTransactions)
  .get('/transactions/incomes', TransactionController.getIncomes)
  .get('/transactions/expenses', TransactionController.getExpenses)
  .get('/transactions/:id', TransactionController.indexTransaction)
  .put('/transactions/:id', TransactionController.updateTransaction)
  .delete('/transactions/:id', TransactionController.deleteTransaction)

export default router

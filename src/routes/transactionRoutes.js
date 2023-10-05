import express from 'express'
import TransactionController from '../controllers/TransactionController.js'
import isAdmin from '../middlewares/isAdmin.js'

const router = express.Router()

router
  .post('/transactions', isAdmin(), TransactionController.createTransaction)
  .get('/transactions', isAdmin(), TransactionController.getTransactions)
  .get('/transactions/filter', isAdmin(), TransactionController.getFilteredTransactions)
  .get('/transactions/incomes', isAdmin(), TransactionController.getIncomes)
  .get('/transactions/expenses', isAdmin(), TransactionController.getExpenses)
  .get('/transactions/:id', isAdmin(), TransactionController.indexTransaction)
  .put('/transactions/:id', isAdmin(), TransactionController.updateTransaction)
  .delete('/transactions/:id', isAdmin(), TransactionController.deleteTransaction)

export default router

import TransactionService from '../services/TransactionService.js'
const transactionService = new TransactionService()

class TransactionController {
  static async createTransaction(req, res, next) {
    const { category, date, type, value, paymentMethod, description } = req.body

    try {
      const transaction = await transactionService.create({
        category,
        date,
        type,
        value,
        paymentMethod,
        description,
      })

      return res.status(201).send(transaction)
    } catch (error) {
      next(error)
    }
  }

  static async getTransactions(req, res, next) {
    try {
      const transactions = await transactionService.get()

      return res.status(200).send(transactions)
    } catch (error) {
      next(error)
    }
  }

  static async getFilteredTransactions(req, res, next) {
    const {
      category,
      type,
      paymentMethod,
      description,
      initialValue,
      finalValue,
      initialDate,
      finalDate
    } = req.query

    try {
      const transactions = await transactionService.getTransactionsFiltered({
        category,
        type,
        paymentMethod,
        description,
      }, {
        initialDate,
        finalDate
      },
      {
        initialValue,
        finalValue
      })

      return res.status(200).send(transactions)
    } catch (error) {
      next(error)
    }
  }

  static async getIncomes(req, res, next) {
    try {
      const incomes = await transactionService.getIncomes()

      return res.status(200).send(incomes)
    } catch (error) {
      next(error)
    }
  }

  static async getExpenses(req, res, next) {
    try {
      const expenses = await transactionService.getExpenses()

      return res.status(200).send(expenses)
    } catch (error) {
      next(error)
    }
  }

  static async indexTransaction(req, res, next) {
    const { id } = req.params

    try {
      const transaction = await transactionService.index(id)

      return res.status(200).send(transaction)
    } catch (error) {
      next(error)
    }
  }

  static async updateTransaction(req, res, next) {
    const { id } = req.params
    const { category, date, type, value, paymentMethod, description } = req.body

    try {
      const transaction = await transactionService.update(id, {
        category,
        date,
        type,
        value,
        paymentMethod,
        description,
      })

      return res.status(200).send(transaction)
    } catch (error) {
      next(error)
    }
  }

  static async deleteTransaction(req, res, next) {
    const { id } = req.params
    try {
      await transactionService.delete(id)

      return res.status(200).send({ msg: 'Transação excluida com sucesso' })
    } catch (error) {
      next(error)
    }
  }
}

export default TransactionController

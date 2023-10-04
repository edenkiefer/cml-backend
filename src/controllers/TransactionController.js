import TransactionService from '../services/TransactionService.js'
const transactionService = new TransactionService()

class TransactionController {
  static async createTransaction(req, res) {
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
      return res.status(400).send({ err: error })
    }
  }

  static async getTransactions(req, res) {
    try {
      const transactions = await transactionService.get()

      return res.status(200).send(transactions)
    } catch (error) {
      return res.status(400).send({ err: error })
    }
  }

  static async indexTransaction(req, res) {
    const { id } = req.params

    try {
      const transaction = await transactionService.index(id)

      return res.status(200).send(transaction)
    } catch (error) {
      return res.status(400).send({ err: error })
    }
  }

  static async updateTransaction(req, res) {
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
      return res.status(400).send({ err: error })
    }
  }

  static async deleteTransaction(req, res) {
    const { id } = req.params
    try {
      await transactionService.delete(id)

      return res.status(200).send({ msg: 'Transação excluida com sucesso' })
    } catch (error) {
      return res.status(400).send({ err: error })
    }
  }
}

export default TransactionController

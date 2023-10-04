import Transaction from '../models/Transaction.js'

class TransactionService {
  async create(dto) {
    const { category, date, type, value, paymentMethod, description } = dto

    const transaction = new Transaction({
      category,
      date,
      type,
      value,
      paymentMethod,
      description,
    })

    return await transaction.save()
  }

  async get() {
    const transactions = await Transaction.find()

    return transactions
  }

  async index(id) {
    const transaction = await Transaction.findOne({ _id: id })

    return transaction
  }

  async update(id, dto) {
    const { category, date, type, value, paymentMethod, description } = dto

    await Transaction.findByIdAndUpdate(id, {
      $set: {
        category,
        date,
        type,
        value,
        paymentMethod,
        description,
      },
    })

    return await Transaction.findOne({ _id: id })
  }

  async delete(id) {
    await Transaction.findByIdAndDelete(id)
  }
}

export default TransactionService

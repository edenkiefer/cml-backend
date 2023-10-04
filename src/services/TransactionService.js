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

  async getTransactionsFiltered(filter, dateFilter, valueFilter) {
    const { category, type, paymentMethod, description } = filter
    const { initialDate, finalDate } = dateFilter
    const { initialValue, finalValue } = valueFilter

    const newFilter = {}

    category ? newFilter.category = category : null 
    type ? newFilter.type = type : null 
    paymentMethod ? newFilter.paymentMethod = paymentMethod : null 
    description ? newFilter.description = description : null 
    initialDate ? newFilter.date = { $gte: new Date(initialDate) } : null
    finalDate ? newFilter.date = { ...newFilter.date, $lte: new Date(finalDate) } : null
    initialValue ? newFilter.value = { $gte: new Number(initialValue) } : null
    finalValue ? newFilter.value = { ...newFilter.value, $lte: new Number(finalValue) } : null

    const transactions = await Transaction.find({ ...newFilter })

    return transactions
  }

  async getIncomes() {
    const incomes = await Transaction.find({ type: 'E' })

    return incomes
  }

  async getExpenses() {
    const expenses = await Transaction.find({ type: 'S' })

    return expenses
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

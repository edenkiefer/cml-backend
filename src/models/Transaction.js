import mongoose from 'mongoose'

const transactionSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      auto: true,
    },
    category: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: new Date(),
    },
    type: {
      type: String,
      required: true,
      enum: {
        values: ['E', 'S'],
      },
    },
    value: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
      enum: {
        values: ['Pix', 'TED', 'Dinheiro'],
      },
    },
    description: { type: String }
  }
)

const Transaction = mongoose.model('transactions', transactionSchema)

export default Transaction
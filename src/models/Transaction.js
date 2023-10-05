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
      required: [true, 'A Categoria da Transação é obrigatório.'],
    },
    date: {
      type: Date,
      required: [true, 'A Data da Transação é obrigatório.'],
      default: new Date(),
    },
    type: {
      type: String,
      required: [true, 'O Tipo(Entrada ou Saída) da Transação é obrigatório.'],
      enum: {
        values: ['E', 'S'],
      },
    },
    value: {
      type: Number,
      required: [true, 'O Valor da Transação é obrigatório.'],
    },
    paymentMethod: {
      type: String,
      required: [true, 'O Método de Pagamento é obrigatório.'],
      enum: {
        values: ['Pix', 'TED', 'Dinheiro'],
      },
    },
    description: { type: String }
  }
)

const Transaction = mongoose.model('transactions', transactionSchema)

export default Transaction
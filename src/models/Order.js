import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      auto: true
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ['Realizado', 'Em produção', 'Pago', 'Enviado'],
      },
      default: 'Realizado'
    },
    client: {
      type: {
        name: {
          type: String,
          required: [true, 'O Nome do(a) Cliente é obrigatório.']
        },
        phone: {
          type: String,
          required: [true, 'O Telefone do(a) Cliente é obrigatório.']
        }
      },
      required: [true, 'O(a) Cliente é obrigatório.']
    },
    itens: {
      type: [
        {
          _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, 'O _id do item deve ser informado.']
          },
          price: {
            type: Number,
            required: [true, 'O preço do item deve ser informado.']
          },
          quantity: {
            type: Number,
            required: [true, 'A quantidade do item deve ser informado.']
          },
          total: {
            type: Number,
            required: [true, 'O valor total do item deve ser informado.']
          }
        }
      ],
      required: [true, 'Algum produto deve ser adicionado para concluir o pedido.']
    },
    subTotal: {
      type: Number,
      required: [true, 'O valor da soma dos produtos deve ser informado é obrigatório.']
    },
    deliveryAddress: {
      type: String
    },
    transactionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'transactions'
    }
  }
)

const Order = mongoose.model('orders', orderSchema)

export default Order
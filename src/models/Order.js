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
          required: true
        },
        phone: {
          type: String,
          required: true
        }
      },
      required: true
    },
    itens: {
      type: [
        {
          _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
          },
          price: {
            type: Number,
            required: true
          },
          quantity: {
            type: Number
          },
          total: {
            type: Number 
          }
        }
      ],
      required: true
    },
    subTotal: {
      type: Number,
      required: true
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
import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      auto: true,
    },
    name: {
      type: String,
      required: [true, 'O Nome do produto é obrigatório.']
    },
    price: {
      type: Number,
      required: [true, 'O Preço do produto é obrigatório.']
    },
    cashPrice: {
      type: Number
    },
    stockQuantity: {
      type: Number
    },
  }
)

const product = mongoose.model('product', productSchema)

export default product
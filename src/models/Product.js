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
      required: true
    },
    price: {
      type: Number,
      required: true
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
import mongoose from 'mongoose'

const reveneusSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      auto: true,
    },
    origin: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
      enum: {
        values: ['Pix', 'TED', 'Dinheiro'],
      },
    },
    transaction: {
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
    },
    description: { type: String },
  },
  { versionKey: false },
)

const Reveneus = mongoose.model('reveneus', reveneusSchema)

export default Reveneus

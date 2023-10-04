import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      auto: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    admin: {
      type: Boolean,
      required: true,
      default: false
    }
  }
)

const User = mongoose.model('users', userSchema)

export default User
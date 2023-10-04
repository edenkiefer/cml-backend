import bcrypt from 'bcryptjs'
import User from '../models/User.js'

class UserService {
  async create(dto) {
    const { username, password } = dto
    const passHash = await bcrypt.hash(password, 8)
    
    const user = new User({
      username,
      password: passHash
    })

    return await user.save()
  }

  async get() {
    const users = User.find()

    return users
  }

  async index(id) {
    const user = await User.findOne({ _id: id })

    return user
  }

  async update(id, dto) {
    const { username, password } = dto

    const passHash = await bcrypt.hash(password, 8)

    await User.findByIdAndUpdate(id, {
      $set: {
        username,
        password: passHash
      },
    })

    return await User.findOne({ _id: id })
  }

  async delete(id) {
    await User.findByIdAndDelete(id)
  }

}

export default UserService

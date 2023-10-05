import bcryptjs from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'

import User from '../models/User.js'

class AuthService {
  async login(dto) {
    const { username, password } = dto

    const user = await User.findOne({ username })

    if (!user)
      throw new Error('Usuário não encontrado')

    if (await bcryptjs.compare(password, user.password))
      throw new Error('Usuário ou Senha inválidos')

    const accessToken = await jsonwebtoken.sign({
      id: user._id,
      username
    },
    process.env.SECRET,
    { expiresIn: 86400 })

    return { accessToken };
  }
}

export default AuthService
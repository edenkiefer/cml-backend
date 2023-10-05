import AuthService from '../services/AuthService.js'
const authService = new AuthService()

class AuthController {
  static async login(req, res, next) {
    const { username, password } = req.body

    try {
      const token = await authService.login({
        username,
        password
      })

      return res.status(200).send(token)
    } catch (error) {
      next(error)
    }
  }
}

export default AuthController

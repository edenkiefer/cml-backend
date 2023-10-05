import UserService from '../services/UserService.js'
const userService = new UserService()

class UserController {
  static async createUser(req, res, next) {
    const { username, password } = req.body

    try {
      const user = await userService.create({
        username, 
        password
      })

      return res.status(201).send(user)
    } catch (error) {
      next(error)
    }
  }

  static async getUsers(req, res, next) {
    try {
      const users = await userService.get()

      return res.status(200).send(users)
    } catch (error) {
      next(error)
    }
  }

  static async indexUser(req, res, next) {
    const { id } = req.params

    try {
      const user = await userService.index(id)

      return res.status(200).send(user)
    } catch (error) {
      next(error)
    }
  }

  static async updateUser(req, res, next) {
    const { id } = req.params
    const { username, password } = req.body
    try {
      const user = await userService.update(id, {
        username, 
        password
      })

      return res.status(200).send(user)
    } catch (error) {
      next(error)
    }
  }

  static async deleteUser(req, res, next) {
    const { id } = req.params
    try {
      await userService.delete(id)

      return res.status(200).send({ msg: 'Usuário excluido com sucesso' })
    } catch (error) {
      next(error)
    }
  }
}

export default UserController

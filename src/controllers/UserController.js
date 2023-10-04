import UserService from '../services/UserService.js'
const userService = new UserService()

class UserController {
  static async createUser(req, res) {
    const { username, password } = req.body

    try {
      const user = await userService.create({
        username, 
        password
      })

      return res.status(201).send(user)
    } catch (error) {
      return res.status(400).send({ err: error })
    }
  }

  static async getUsers(req, res) {
    try {
      const users = await userService.get()

      return res.status(200).send(users)
    } catch (error) {
      return res.status(400).send({ err: error })
    }
  }

  static async indexUser(req, res) {
    const { id } = req.params

    try {
      const user = await userService.index(id)

      return res.status(200).send(user)
    } catch (error) {
      return res.status(400).send({ err: error })
    }
  }

  static async updateUser(req, res) {
    const { id } = req.params
    const { username, password } = req.body
    try {
      const user = await userService.update(id, {
        username, 
        password
      })

      return res.status(200).send(user)
    } catch (error) {
      return res.status(400).send({ err: error })
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params
    try {
      await userService.delete(id)

      return res.status(200).send({ msg: 'Usuário excluido com sucesso' })
    } catch (error) {
      return res.status(400).send({ err: error })
    }
  }
}

export default UserController

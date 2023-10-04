import express from 'express'
import UserController from '../controllers/UserController.js'
import isAdmin from '../middlewares/isAdmin.js'

const router = express.Router()

router
  .post('/users', isAdmin(), UserController.createUser)
  .get('/users', isAdmin(), UserController.getUsers)
  .get('/users/:id', isAdmin(), UserController.indexUser)
  .put('/users/:id', isAdmin(), UserController.updateUser)
  .delete('/users/:id', isAdmin(), UserController.deleteUser)

export default router

import express from 'express'
import AuthController from '../controllers/AuthController.js'
import authenticated from '../middlewares/authenticated.js'

const router = express.Router()

router
  .get('/login', AuthController.login)

router.use(authenticated)

export default router

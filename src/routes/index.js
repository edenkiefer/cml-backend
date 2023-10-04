import express from 'express'
import transactions from './transactionRoutes.js'
import products from './productRoutes.js'
import orders from './orderRoutes.js'
import users from './userRoutes.js'
import auth from './authRoutes.js'
import authenticated from '../middlewares/authenticated.js'

const routes = (app) => {
  app.use(
    express.json(), 
    auth,
    transactions, 
    products,
    orders,
    users
  )
}

export default routes

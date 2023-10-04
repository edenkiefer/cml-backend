import express from 'express'
import transactions from './transactionRoutes.js'
import products from './productRoutes.js'
import orders from './orderRoutes.js'

const routes = (app) => {
  app.use(
    express.json(), 
    transactions, 
    products,
    orders
  )
}

export default routes

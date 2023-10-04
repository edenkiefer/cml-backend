import express from 'express'
import transactions from './transactionRoutes.js'
import products from './productRoutes.js'

const routes = (app) => {
  app.use(
    express.json(), 
    transactions, 
    products
  )
}

export default routes

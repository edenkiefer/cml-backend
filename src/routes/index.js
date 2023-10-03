import express from 'express'
import transactions from './transactionRoutes.js'

const routes = (app) => {
  app.use(express.json(), transactions)
}

export default routes

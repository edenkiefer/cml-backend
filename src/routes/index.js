import express from 'express'
import reveneus from './reveneusRoutes.js'

const routes = (app) => {
  app.use(express.json(), reveneus)
}

export default routes

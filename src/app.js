import express from 'express'
import db from './config/dbConnect.js'

db.on('error', console.log.bind(console, 'Connection Error'))
db.once('open', () => {
  console.log('Connection to the database successful ✅')
})

const app = express()

export default app

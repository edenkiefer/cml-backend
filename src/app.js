import express from 'express'
import db from './config/dbConnect.js'
import routes from './routes/index.js'
import handlerErrors from './middlewares/handlerErrors.js'

db.on('error', console.log.bind(console, 'Connection Error'))
db.once('open', () => {
  console.log('Connection to the database successful ✅')
})

const app = express()

routes(app)

app.use(handlerErrors)

export default app

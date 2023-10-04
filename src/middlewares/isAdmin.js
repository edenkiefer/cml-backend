import User from '../models/User.js'

const isAdmin = () => {
  return async (req, res, next) => {
    const { userId } = req
    
    const user = await User.findOne({ _id: userId })

    if (!user)
      return res.status(401).send('Usuario não cadastrado')
  
    if (!user.admin)
      return res.status(401).send('Admin: Usuario não autorizado')
  
    return next()
  }
}

export default isAdmin
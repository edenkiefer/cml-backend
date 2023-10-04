import jsonwebtoken from 'jsonwebtoken'

const authenticated = async (req, res, next) => {
  const token = req.headers.authorization

  if (!token) 
    return res.status(401).send('Token não informado')
  
  const [, accessToken] = token.split(" ");

  try {
    jsonwebtoken.verify(accessToken, process.env.SECRET)
    const { id, username } = await jsonwebtoken.decode(accessToken)

    req.userId = id;
    req.username = username;

    return next();
  } catch (error) {
    res.status('401').send('Usuario não autorizado')
  }

}

export default authenticated
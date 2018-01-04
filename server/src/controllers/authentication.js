const queries = require('./queries');
const { hashPassword } = require('../services/bcrypt');
const jwt = require('jwt-simple');

const userToken = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.SECRET);
}


exports.signIn = (req, res) => {
  res.json({ token: userToken(req.user) });
}

exports.signUp = (req, res, next) => {
  const { username, password } = req.body;
  
  if (!username || !password){
    return res.status(422).send({ error: 'You must provide email and password'})
  }

  queries
  .getUser(username)
  .then(user => {
    if(user){
      return res.status(422).send({ error: 'Username is in use'})
    }
    return hashPassword(password)
  })
  .then(hash => {
    return queries.addUser(username, hash)
  })
  .then(user => {
    res.json({ token: userToken(user) });
  })
  .catch(next)
}
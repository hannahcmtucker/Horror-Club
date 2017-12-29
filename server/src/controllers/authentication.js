const queries = require('./queries');

exports.signIn = (req, res) => {
  res.send(req.user)
}
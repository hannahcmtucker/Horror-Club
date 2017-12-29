const passport = require('passport');
const LocalStrategy = require('passport-local');
const queries = require('../controllers/queries');
const { comparePassword } = require('./bcrypt');

const localLogin = new LocalStrategy((username, password, done) => {
  queries
  .getUser(username)
  .then(user => {
    if (!user) {return done(null, false)}
    return comparePassword(password, user)
  })
  .then(({ isMatch, user }) => {
    if (!isMatch) { return done(null, false) }
    return done(null, user)
  })
  .catch(done)
})

passport.use(localLogin);
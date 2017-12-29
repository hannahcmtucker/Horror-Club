const passport = require('passport');
const LocalStrategy = require('passport-local');
const { Strategy, ExtractJwt } = require('passport-jwt');
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

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.SECRET
};

const jwtLogin = new Strategy(jwtOptions, (payload, done) => {
  queries
  .getUserById(payload.sub)
  .then(user => {
    if (user){
      done(null, user);
    } else {
      done(null, false);
    }
  })
  .catch(done)
})



passport.use(localLogin);
passport.use(jwtLogin);
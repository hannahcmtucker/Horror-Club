const express = require('express');
const router = express.Router();
const passport = require('passport');
const passportService = require('../services/passport');

const { getMovies, getMovie, postMovie } = require('./api_requests');
const { signIn, signUp } = require('./authentication');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false })

router.post('/signup', signUp)
router.post('/signin', requireSignin, signIn)

router.get('/movies', requireAuth, getMovies)
router.get('/movie/:id', requireAuth, getMovie)
router.post('/addmovie', requireAuth, postMovie)

module.exports = router;
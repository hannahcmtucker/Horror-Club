const express = require('express');
const router = express.Router();
const passport = require('passport');
const passportService = require('../services/passport');

const { getMovies, getMovie, postMovie } = require('./api_requests');
const { signIn } = require('./authentication');


const requireSignin = passport.authenticate('local', { session: false })


router.post('/signin', requireSignin, signIn)

router.get('/movies', getMovies)
router.get('/movie/:id', getMovie)
router.post('/addMovie', postMovie)

module.exports = router;
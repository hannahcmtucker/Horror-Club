const express = require('express');
const router = express.Router();
const queries = require('./queries');

router.get('/', (req, res, next) => {
  queries
  .getMovies()
  .then (movies => {
    res.send(movies)
  })
})

router.get('/movie/:id', (req, res, next) => {
  const { id } = req.params;
  queries
  .getMovie(id)
  .then (movie => {
    res.send(movie)
  })
})

module.exports = router;
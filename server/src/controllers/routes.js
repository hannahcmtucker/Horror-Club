const express = require('express');
const router = express.Router();
const queries = require('./queries');

router.get('/', (req, res, next) => {
  queries
  .getMovies()
  .then (movies => {
    res.send(movies)
  })
  .catch(console.log)
})

router.get('/movie/:id', (req, res, next) => {
  const { id } = req.params;
  queries
  .getMovie(id)
  .then (movie => {
    res.send(movie)
  })
  .catch(console.log)
})

router.post('/addMovie', (req, res, next) => {
  const { body } = req;
  queries
  .addMovie(body)
  .then(id => {
    res.send(id)
  })
  .catch(console.log)
})

module.exports = router;
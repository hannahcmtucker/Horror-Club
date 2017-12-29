const queries = require('./queries');

exports.getMovies = (req, res) => {
  queries
  .getMovies()
  .then (movies => {
    res.send(movies)
  })
  .catch(console.log)
}

exports.getMovie = (req, res) => {
  const { id } = req.params;
  queries
  .getMovie(id)
  .then (movie => {
    res.send(movie)
  })
  .catch(console.log)
}

exports.postMovie = (req, res) => {
  const { body } = req;
  queries
  .addMovie(body)
  .then(id => {
    res.send(id)
  })
  .catch(console.log)
}
const db = require('../model/dbConnection');

const getMovies = () => {
  return db.query(`SELECT * FROM movies`)
}

const getMovie = (id) => {
  return db.query(`SELECT * FROM movies WHERE movies.id=$1`, [id])
}

module.exports = {
  getMovies,
  getMovie
}
const db = require('../model/dbConnection');

const getMovies = () => {
  return db.query(`SELECT * FROM movies`)
}

const getMovie = (id) => {
  return db.query(`SELECT * FROM movies WHERE movies.id=$1`, [id])
}

const addMovie = (movie) => {
  const { title, year, description } = movie;
  return db.query(`INSERT INTO movies (title, year, description) VALUES($1,$2,$3) RETURNING ID`, [title, year, description])
  .then(id => id[0])
}

const getUser = username => {
  return db.query('SELECT * FROM users WHERE username = $1', [username])
  .then(user => user[0])
}

const addUser = (username, password) => {
  return db.query(`INSERT INTO users (username, password) VALUES($1,$2) RETURNING USERNAME, ID`, [username, password])
  .then(user => user[0]);
}; 

module.exports = {
  getMovies,
  getMovie,
  addMovie,
  getUser,
  addUser
}
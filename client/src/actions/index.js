import axios from 'axios';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const ADD_MOVIE = 'ADD_MOVIE';

/*AUTH*/
export const signinUser = () => {
  
}

/*MOVIES*/
export const fetchMovies = () => {
    const request = axios.get('/api/movies')
    return {
      type: FETCH_MOVIES,
      payload: request
    }
}

export const fetchMovie = (id) => {
  const request = axios.get(`/api/movie/${id}`)
  return{
    type: FETCH_MOVIE,
    payload: request
  }
}

export const addMovie = (values, cb) => {
  const request = axios.post('/api/addMovie', values)
  .then((req) => cb(req))

  return {
    type: ADD_MOVIE,
    payload: request
  }
}
import axios from 'axios';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const ADD_MOVIE = 'ADD_MOVIE';

const ROOT_URL = 'http://localhost:3000';

export const fetchMovies = () => {
    const request = axios.get(ROOT_URL)
    return {
      type: FETCH_MOVIES,
      payload: request
    }
}

export const fetchMovie = (id) => {
  const request = axios.get(`${ROOT_URL}/movie/${id}`)
  return{
    type: FETCH_MOVIE,
    payload: request
  }
}

export const addMovie = () => {
  return {
    type: ADD_MOVIE,
  }
}
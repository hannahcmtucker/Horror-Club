import axios from 'axios';
import history from './history';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const ADD_MOVIE = 'ADD_MOVIE';


export const fetchMovies = () => {
  return(dispatch) => {
    axios.get('/api/movies', {
      headers: {authorization: localStorage.getItem('token')}
    })
    .then(response => {
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data
      })
    })
    .catch(err => console.log)
  }
}

export const fetchMovie = (id) => {
  return(dispatch) => {
    axios.get(`/api/movie/${id}`, {
      headers: {authorization: localStorage.getItem('token')}
    })
    .then(response => {
      dispatch({
        type: FETCH_MOVIE,
        payload: response.data
      })
    })
    .catch(err => console.log)
  }
}

export const addMovie = (values) => {
  return(dispatch) => {
    axios.post('/api/addmovie', values, {
      headers: {authorization: localStorage.getItem('token')}
    })
    .then(response => {
      const { id } = response.data
      history.push(`/movie/${id}`)
      dispatch({
        type: ADD_MOVIE,
      })
    })
    .catch(err => console.log)
  }
}
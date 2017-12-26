import axios from 'axios';

export const FETCH_MOVIES = 'FETCH_MOVIES';

export const fetchMovies = () => {
    const request = axios.get('http://localhost:3000/')
    return {
      type: FETCH_MOVIES,
      payload: request
    }
}
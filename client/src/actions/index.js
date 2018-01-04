import axios from 'axios';
import history from './history';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const ADD_MOVIE = 'ADD_MOVIE';
export const AUTH_USER = 'AUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const UNAUTH_USER = 'UNAUTH_USER';

/*AUTH*/
export const signinUser = ({ username, password }) => {
  return (dispatch) => {
    axios.post('api/signin', { username, password })
    .then(response => {
      dispatch({ type: AUTH_USER });
      localStorage.setItem('token', response.data.token);
      history.push('/movies');
    })
    .catch(error => {
      dispatch(authError('Username or password was incorrect'));
    })
  } 
}

export const signupUser = (values) => {
  return (dispatch) => {
    axios.post('api/signup', values)
    .then(response => {
      dispatch({ type: AUTH_USER });
      localStorage.setItem('token', response.data.token);
      history.push('/movies');
    })
    .catch(error => {
      dispatch(authError(error.response.data.error));
    })
  } 
}

export const signoutUser = () => {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
  
}

export const authError = (error) => {
  return {
    type: AUTH_ERROR,
    payload: error
  };
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
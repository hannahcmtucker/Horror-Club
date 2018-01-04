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
      dispatch({ type: AUTH_USER,
                       payload: response.data.username });
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
      dispatch({ type: AUTH_USER,
                 payload: response.data.username});
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
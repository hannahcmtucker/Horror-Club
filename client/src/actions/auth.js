import axios from 'axios';
import history from './history';

export const AUTH_USER = 'AUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const UNAUTH_USER = 'UNAUTH_USER';


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

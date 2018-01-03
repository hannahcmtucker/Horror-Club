import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import moviesReducer from './reducers_movies';
import authReducer from './reducers_auth';

const rootReducer = combineReducers({
  movies: moviesReducer,
  form: formReducer,
  auth: authReducer
});

export default rootReducer;
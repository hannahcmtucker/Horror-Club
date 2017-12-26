import { combineReducers } from 'redux';
import MoviesReducer from './reducers_movies';

const rootReducer = combineReducers({
  movies: MoviesReducer
});

export default rootReducer;
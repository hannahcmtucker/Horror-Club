import { FETCH_MOVIES, FETCH_MOVIE } from '../actions/index';

export default (state = {}, action) => {
  switch (action.type){
    case FETCH_MOVIES:
      return mapKeys(action.payload, 'id');
    case FETCH_MOVIE:
      return { ...state, [action.payload[0].id]: action.payload[0] }
    default:
      return state;  
  }
}

const mapKeys = (arr, key) => {
  return arr.reduce((acc, cur) => {
    acc[cur[key]] = cur; 
    return acc;
  }, {})
}
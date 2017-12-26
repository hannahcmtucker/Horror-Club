import { FETCH_MOVIES } from '../actions/index';

export default (state = {}, action) => {
  switch (action.type){
    case FETCH_MOVIES:
      return mapKeys(action.payload.data, 'id');
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
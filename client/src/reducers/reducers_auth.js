import { AUTH_USER, AUTH_ERROR } from '../actions/index';

export default (state = {}, action) => {
  switch(action.type){
    case AUTH_USER:
      return { ...state, authenticated: true, error: ''};
    case AUTH_ERROR:
      return { ...state, error: action.payload};  
  }
  
  return state;
}
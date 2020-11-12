import { SET_DATA, SET_LOADED, SET_LOADING } from './actions';

const defaultState = {
  loading: false,
  results: [],
}

export function searchReducer(state=defaultState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    
    case SET_DATA:
      return {
        ...state,
        results: action.payload.moviesArray,
        loading: false
      }
    
    case SET_LOADED:
      return {
        ...state,
        loading: false
      }

    default:
      return state;
  }
}
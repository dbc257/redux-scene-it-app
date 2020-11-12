export const SET_DATA = 'SET_DATA';
export const SET_LOADING = 'SET_LOADING';
export const SET_LOADED = 'SET_LOADED';

export function loading() {
  return {
    type: SET_LOADING
  }
}

export function loaded() {
  return {
    type: SET_LOADED
  }
}

export function setData(moviesArray) {
  return {
    type: SET_DATA,
    payload: {
      moviesArray
    }
  }
}
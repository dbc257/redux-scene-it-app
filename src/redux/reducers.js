import { combineReducers } from "redux";
const { SET_LOADING, SET_LOADED, SET_DATA, ADD_MOVIE, DELETE_MOVIE } = require("./action");


const searchReducer = (state=[], action) => {
    switch (action.type) {
        case SET_DATA:
            return action.payload.moviesArray
        default:
            return state;
    }
}

const loadingReducer = (state=false, action) => {
    switch (action.type){
        case SET_LOADING:
            return true
        case SET_LOADED: 
            return false
        default: 
            return state
    }
}

const favoritesReducer = (state=[], action) => {
    switch(action.type){
        case ADD_MOVIE:
            return state.concat(action.payload.newMovie)
        case DELETE_MOVIE:
            return state.filter(favorite => favorite.imdbID !== action.payload.imdbID)
        default: 
            return state;
    }
}

//! Combine multiple reducers using the combineReducers function
export const rootReducer = combineReducers({
  loading: loadingReducer,
  results: searchReducer,
  favorites: favoritesReducer,
})
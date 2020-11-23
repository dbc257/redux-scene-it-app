export const SET_DATA = 'SET_DATA';
export const SET_LOADING = 'SET_LOADING';
export const SET_LOADED = 'SET_LOADED';
export const ADD_MOVIE = 'ADD_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';

export const loading = () => {
    return {
        type: SET_LOADING
    }
}

export const loaded =() => {
    return {
        type: SET_LOADED
    }
}

export const setData = (moviesArray) => {
    return {
        type: SET_DATA,
        payload: {
            moviesArray
        }
    }
}

export const addMovie = (newMovie) => {
    return {
        type: ADD_MOVIE,
        payload: {
            newMovie
        }
    }
}

export const deleteMovie = (imdbID) => {
    return {
        type: DELETE_MOVIE,
        payload: {
            imdbID
        }
    }
}
import {applyMiddleware, compose, createStore} from 'redux';
import { load, save } from 'redux-localstorage-simple';
import {rootReducer} from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

const middleware = composeEnhancers(applyMiddleware(
    save()
))

export const store = createStore(
    rootReducer,
    load(),
    middleware
)

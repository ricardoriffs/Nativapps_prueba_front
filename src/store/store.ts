import { configureStore } from '@reduxjs/toolkit';
import {createStore, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import { moviesReducer } from '../reducers/moviesReducer';
import { filterReducer } from '../reducers/filterReducer';
import { uiReducer } from '../reducers/uiReducer';

const reducer = combineReducers({
    movies: moviesReducer,
    filter: filterReducer,
    ui: uiReducer
})
// export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__())

export const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware:[thunk]
}) 

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
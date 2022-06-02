// configureStore.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import dravelReducer from './dravelStore/dravelStore';

const reducer = combineReducers({ dravelReducer });

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;

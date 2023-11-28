import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import teaReducer from "./teaReducer";
import userReducer from "./userReducer";
import transactionReducer from "./transactionReducer";

const rootReducer = combineReducers({
  teas: teaReducer,
  transactions: transactionReducer,
  users: userReducer
});

const configureStore = (initialState = {}) => (
  legacy_createStore(rootReducer, initialState, applyMiddleware(thunk, logger))
);

export default configureStore;
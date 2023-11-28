import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import teaReducer from "./teaReducer";
import transactionReducer from "./transactionReducer";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import userReducer from "./userReducer";

// const dummyReducer = (state = {}, action) => state; 
// const store = legacy_createStore(dummyReducer, {});

const rootReducer = combineReducers({
  teas: teaReducer,
  transactions: transactionReducer,
  users: userReducer
});

const configureStore = (initialState = {}) => (
  legacy_createStore(rootReducer, initialState, applyMiddleware(thunk, logger))
);

export default configureStore;
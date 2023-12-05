import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import teaReducer from "./teaReducer";
import userReducer from "./userReducer";
import transactionReducer from "./transactionReducer";
import sessionReducer from "./sessionReducer";

const rootReducer = combineReducers({
  teas: teaReducer,
  transactions: transactionReducer,
  users: userReducer,
  session: sessionReducer
});

const configureStore = (initialState = {}) => (
  legacy_createStore(rootReducer, initialState, applyMiddleware(thunk))
);

export default configureStore;
import { legacy_createStore, combineReducers } from "redux";
import teaReducer from "./teaReducer";
import transactionReducer from "./transactionReducer";
import userReducer from "./userReducer";

// const dummyReducer = (state = {}, action) => state; 
// const store = legacy_createStore(dummyReducer, {});

const rootReducer = combineReducers({
  teas: teaReducer,
  transactions: transactionReducer,
  users: userReducer
});

const configureStore = (initialState = {}) => (
  legacy_createStore(rootReducer, initialState)
);

export default configureStore;
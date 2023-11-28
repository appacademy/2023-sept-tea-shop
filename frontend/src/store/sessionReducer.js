import { deleteSession, postSession } from "../utils/session_api_util";
import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER, receiveCurrentUser, removeCurrentUser } from "./userReducer";

// Type Constants

// Action Creators

// Thunk Action Creators
export const loginUser = user => async dispatch => {
  const res = await postSession(user);
  let data;
  if (res.ok) {
    data = await res.json();
    sessionStorage.setItem('currentUser', JSON.stringify(data.user));
    dispatch(receiveCurrentUser(data.user))
  } else {
    console.log('something went wrong');
  }
};

export const logoutUser = userId => async dispatch => {
  const res = await deleteSession();
  if (res.ok) {
    sessionStorage.removeItem('currentUser');
    dispatch(removeCurrentUser(userId));
  } else {
    console.log('something went wrong');
  }
};

// Selectors

// Reducer
const sessionReducer = (state = { currentUserId: null }, action) => {
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUserId: action.user.id };
    case REMOVE_CURRENT_USER:
      return { currentUserId: null };
    default:
      return state;
  }
};

export default sessionReducer;
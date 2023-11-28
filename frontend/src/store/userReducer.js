import { postUser } from "../utils/user_api_utils";

// Type Constants
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

// Action Creators
export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const removeCurrentUser = userId => ({
  type: REMOVE_CURRENT_USER,
  userId
});

// Thunk Action Creators
export const createUser = user => async dispatch => {
  const res = await postUser(user);
  let data;
  if (res.ok) {
    data = await res.json();
    sessionStorage.setItem('currentUser', JSON.stringify(data.user));
    dispatch(receiveCurrentUser(data.user));
  } else {
    console.log('Something went wrong');
  }
};

// Selectors

// Reducer
const userReducer = (state ={}, action) => {
  const nextState = Object.assign(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState[action.user.id] = action.user;
      return nextState;
    case REMOVE_CURRENT_USER:
      delete nextState[action.userId];
      return nextState;
    default:
      return state;
  }
};

export default userReducer;
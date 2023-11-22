import { RECEIVE_TEA } from "./teaReducer";

// Reducer
const userReducer = (state ={}, action) => {
  // console.log('userReducer...');
  const nextState = Object.assign(state);

  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
// Type Constants
export const RECEIVE_TEAS = 'RECEIVE_TEAS';
export const RECEIVE_TEA = 'RECEIVE_TEA';
export const UPDATE_TEA = 'UPDATE_TEA';
export const REMOVE_TEA = 'REMOVE_TEA';
import { postTea, deleteTea } from "../utils/tea_api_util";

// Action Creators
export const receiveTeas = teas => ({
  type: RECEIVE_TEAS,
  teas: teas
});

export const receiveTea = tea => ({
  type: RECEIVE_TEA,
  payload: tea
});

export const updateTea = tea => ({
  type: UPDATE_TEA,
  tea
});

export const removeTea = teaId => ({
  type: REMOVE_TEA,
  teaId: teaId
});


// THUNK ACTION CREATOR
export const createTea = (tea) => async (dispatch) =>{
  // make our request, using the until function we just wrote 
  const res = await postTea(tea);;
  let data;
  if(res.ok){
    data = await res.json();
    // if the response is okay, I then want to dispatch that data via an action creator
    dispatch(receiveTea(data))
    
  }else{
    console.log(res.statusText)
  }

}


export const destroyTea = (teaId) => async (dispatch) =>{
  const res = await deleteTea(teaId);
  let data;
  if(res.ok){
    data = await res.json();
    dispatch(removeTea(data.id))
  }else {
    console.log("something went wrong!")
  }
}






// export const deleteTea = (teaId) => {
//   return fetch(`/api/teas/${teaId}`, {
//     method: 'DELETE',
//     // body: JSON.stringify(tea),
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     }
//   });
// };


// Selectors
export const selectTeas = state => state.teas;

// Reducer
const teaReducer = (state = {}, action) => {
  // console.log('teaReducer...');
  const nextState = Object.assign({}, state);
  // const nextState = { ...state };

  switch (action.type) {
    case RECEIVE_TEAS:
      // can differ depending on whether we are given an arry or object of teas
      // if action.teas is an object
      return { ...nextState, ...action.teas };
      // if action.teas is an array of objects
      // for (let tea of action.teas) {
      //   nextState[tea.id] = tea;
      // }
      // return nextState;
    case RECEIVE_TEA:
      nextState[action.payload.id] = action.payload;
      return nextState;
    case UPDATE_TEA:
      nextState[action.tea.id] = { ...nextState[action.tea.id], ...action.tea };
      return nextState;
    case REMOVE_TEA:
      delete nextState[action.teaId];
      return nextState;
    default:
      return state;
  }
};

export default teaReducer;
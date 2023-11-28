import { createSelector } from 'reselect';

import { getTeas, postTea, deleteTea, getTea } from "../utils/tea_api_util";

// Type Constants
export const RECEIVE_TEAS = 'RECEIVE_TEAS';
export const RECEIVE_TEA_INFO = 'RECEIVE_TEA_INFO';
export const RECEIVE_TEA_DETAIL = 'RECEIVE_TEA_DETAIL';
export const UPDATE_TEA = 'UPDATE_TEA';
export const REMOVE_TEA = 'REMOVE_TEA';

// Action Creators
export const receiveTeas = teas => ({
  type: RECEIVE_TEAS,
  teas: teas
});

export const receiveTeaInfo = tea => ({
  type: RECEIVE_TEA_INFO,
  tea
});

export const receiveTeaDetail = data => ({
  type: RECEIVE_TEA_DETAIL,
  data
});

export const updateTea = tea => ({
  type: UPDATE_TEA,
  tea
});

export const removeTea = teaId => ({
  type: REMOVE_TEA,
  teaId: teaId
});

// Thunk Action Creators
export const fetchTea = teaId => async dispatch => {
  const res = await getTea(teaId);
  let data;
  if (res.ok) {
    data = await res.json();
    dispatch(receiveTeaDetail(data));
  } else {
    console.log(res.statusText);
  }
};

export const fetchTeas = () => async dispatch => {
  const res = await getTeas();
  let data;
  if (res.ok) {
    data = await res.json();
    dispatch(receiveTeas(data));
  } else {
    console.log(res.statusTest);
  }
};

export const createTea = tea => async dispatch => {
  const res = await postTea(tea);
  let data;
  if (res.ok) {
    data = await res.json();
    dispatch(receiveTeaInfo(data))
  } else {
    console.log(res.statusText)
  }
};

export const destroyTea = teaId => async dispatch => {
  const res = await deleteTea(teaId);
  if (res.ok) {
    dispatch(removeTea(teaId));
  }else {
    console.log("something went wrong!")
  }
};

// Selectors
// selectors that return an object generally do not need to be memoized
export const selectTeas = state => state.teas;

export const selectTeasArray = createSelector(selectTeas, teas => Object.values(teas));

// Reducer
const teaReducer = (state = {}, action) => {
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TEAS:
      return { ...nextState, ...action.teas };
    case RECEIVE_TEA_INFO:
      nextState[action.tea.id] = action.tea;
      return nextState;
    case RECEIVE_TEA_DETAIL:
      nextState[action.data.tea.id] = action.data.tea;
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
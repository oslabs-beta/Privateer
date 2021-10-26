import * as types from '../constants/actionTypes';

const initialState = {};

const createReducer = (state = initialState, action) => {
  switch (action.type) {
    // action case example

    // case types.UPDATE_LOCATION:
    //   return {
    //     ...state,
    //     newLocation: action.payload,
    //   };

    default:
      return state;
  }
};

export default createReducer;

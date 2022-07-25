import * as types from '../constants/actionTypes';

const initialState = {
  cmApi: '',
  cmMetaName: '',
  cmDataNum: 0,
  cmData: {},
};

const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CONFIG_SAVE: {
      return {};
    }

    case types.ADD_DATA: {
      return {
        ...state,
        cmDataNum: action.payload,
      };
    }

    default:
      return state;
  }
};

export default createReducer;

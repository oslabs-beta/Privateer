import * as types from '../constants/actionTypes';

export const configMapSave = (obj) => ({
  type: types.CONFIG_SAVE,
  payload: obj,
});

export const addDataFields = (num) => ({
  type: types.ADD_DATA,
  payload: num,
});

import * as types from '../constants/actionTypes';

// example

// export const updateLocation = data => ({
//   type: types.UPDATE_LOCATION,
//   payload: data,
// });

export const configMapSave = obj => ({
  type: types.CONFIG_SAVE,
  payload: obj,
})

export const addDataFields = num => ({
  type: types.ADD_DATA,
  payload: num,
})

import { combineReducers } from 'redux';
import createReducer from './createReducer';

export default combineReducers({
  create: createReducer,
});

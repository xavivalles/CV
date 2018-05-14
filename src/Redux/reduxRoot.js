import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { coreReducer } from './coreReducer';

export const reducers = combineReducers({
  routing: routerReducer,
  coreReducer,
});
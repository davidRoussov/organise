import { combineReducers } from 'redux';
import navbar from './navbar';
import formatOne from './formatOne';

const reducers = combineReducers({
  navbar,
  formatOne
});

export default reducers;
import { combineReducers } from 'redux';
import navbar from './navbar';
import formatOne from './formatOne';
import authentication from './authentication';

const reducers = combineReducers({
  navbar,
  formatOne,
  authentication
});

export default reducers;
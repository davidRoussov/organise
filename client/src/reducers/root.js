import { combineReducers } from 'redux';
import navbar from './navbar';
import formatOne from './formatOne';
import authentication from './authentication';
import app from './app';

const reducers = combineReducers({
  app,
  navbar,
  formatOne,
  authentication
});

export default reducers;
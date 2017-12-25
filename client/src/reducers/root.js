import { combineReducers } from 'redux';
import navbar from './navbar';
import formatOne from './formatOne';
import formatTwo from './formatTwo';
import formatThree from './formatThree';
import timetable from './timetable';
import authentication from './authentication';
import app from './app';

const reducers = combineReducers({
  app,
  navbar,
  formatOne,
  authentication,
  formatTwo,
  formatThree,
  timetable
});

export default reducers;
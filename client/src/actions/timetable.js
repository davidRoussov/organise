import { SERVER_URL } from '../config';
import handleErrors from './utilities';

export const triggerTimetableModal = () => dispatch => dispatch({ type: 'TRIGGER_TIMETABLE_MODAL' });
export const closeTimetableModal = () => dispatch => dispatch({ type: 'CLOSE_TIMETABLE_MODAL' });

export const showColorButtons = () => dispatch => dispatch({ type: 'SHOW_TIMETABLE_COLOR_BUTTONS' });
export const hideColorButtons = () => dispatch => dispatch({ type: 'HIDE_TIMETABLE_COLOR_BUTTONS' });

export const updateTableCell = (time, day, text) => dispatch => {
  dispatch({ type: 'SMALL_NETWORK_REQUEST' });

  fetch(`${SERVER_URL}/api/t`, {
    method: 'PUT',
    credentials: 'include',
    body: JSON.stringify({ time, day, text }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(handleErrors)
  .then(response => response.json())
  .then(response => {
    dispatch({ type: 'SMALL_NETWORK_REQUEST_SUCCESS' });
    dispatch({ type: 'SUCCESS_UPDATING_TIMETABLE_CELL' });
  })
  .catch(error => {
    dispatch({ type: 'SMALL_NETWORK_REQUEST_FAIL' });
  })
  .then(() => setTimeout(() => dispatch({ type: 'HIDE_MINI_INDICATOR' }), 3000));
};

export const getTableData = () => dispatch => {
  dispatch({ type: 'SMALL_NETWORK_REQUEST' });

  fetch(`${SERVER_URL}/api/t`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(handleErrors)
  .then(response => response.json())
  .then(response => {
    dispatch({ type: 'SMALL_NETWORK_REQUEST_SUCCESS' });
    dispatch({ type: 'GET_TIMETABLE_DATA', data: response });
  })
  .catch(error => {
    dispatch({ type: 'SMALL_NETWORK_REQUEST_FAIL' });
  })
  .then(() => setTimeout(() => dispatch({ type: 'HIDE_MINI_INDICATOR' }), 3000));
};

export const updateTimetableSettings = (newTimes, twelveHours) => dispatch => {
  dispatch({ type: 'SMALL_NETWORK_REQUEST' });

  fetch(`${SERVER_URL}/api/t/settings`, {
    method: 'PUT',
    credentials: 'include',
    body: JSON.stringify({ times: newTimes, twelveHours }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(handleErrors)
  .then(response => response.json())
  .then(response => {
    dispatch({ type: 'SMALL_NETWORK_REQUEST_SUCCESS' });
    dispatch(getTableData());
  })
  .catch(error => {
    dispatch({ type: 'SMALL_NETWORK_REQUEST_FAIL' });
  })
  .then(() => setTimeout(() => dispatch({ type: 'HIDE_MINI_INDICATOR' }), 3000));
};
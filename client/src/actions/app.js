import { SERVER_URL } from '../config';
import handleErrors from './utilities';

export const hideAlerts = () => dispatch => dispatch({ type: 'HIDE_ALERTS' });

export const getUser = () => dispatch => {
  fetch(SERVER_URL + '/api/user', {
    credentials: 'include'
  })
  .then(handleErrors)
  .then(response => response.json())
  .then(response => {
    dispatch({
      type: 'GOT_USER',
      data: response.user
    });
    dispatch({ type: 'DONE_LOADING_USER' })
  })
  .catch(error => {
    dispatch({
      type: 'GET_USER_FAILED',
      data: error.message
    });
    window.location.href = '/login'
  })
};
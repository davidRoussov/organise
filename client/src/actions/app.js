import { SERVER_URL } from '../config';
import handleErrors from './utilities';

export const getUser = () => dispatch => {
  dispatch({ type: 'SHOW_SPINNER' });
  fetch(SERVER_URL + '/api/user', {
    credentials: 'include'
  })
  .then(handleErrors)
  .then(response => response.json())
  .then(response => {
    dispatch({
      type: 'GOT_USER',
      data: response
    });
  })
  .catch(error => {
    dispatch({
      type: 'GET_USER_FAILED',
      message: error
    });
  })
  .then(() => dispatch({ type: 'HIDE_SPINNER' }));
};
import { SERVER_URL } from '../config';
import handleErrors from './utilities';

export const logout = () => dispatch => {
  dispatch({ type: 'SHOW_SPINNER' });

  fetch(`${SERVER_URL}/api/auth/logout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(handleErrors)
  .then(response => response.json())
  .then(response => {
    window.location.href = '/login';
  })
  .catch(error => {

  });
};

export const signup = user => dispatch => {
  dispatch({ type: 'SHOW_SPINNER' });
  fetch(`${SERVER_URL}/api/auth/signup`, {
    method: 'POST',
    body: JSON.stringify({ user }),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
  .then(handleErrors)
  .then(response => response.json())
  .then(response => {
    window.location.href = '/';
  })
  .catch(error => {
    dispatch({
      type: 'SIGNUP_FAILED',
      message: error
    });
    dispatch({ type: 'HIDE_SPINNER' });
  })
};

export const login = credentials => dispatch => {
  dispatch({ type: 'SHOW_SPINNER' });
  fetch(`${SERVER_URL}/api/auth/login`, {
    method: 'POST',
    body: JSON.stringify({ credentials }),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
  .then(handleErrors)
  .then(response => response.json())
  .then(response => {
    window.location.href = '/';
  })
  .catch(error => {
    dispatch({
      type: 'LOGIN_FAILED',
      message: error
    });
    dispatch({ type: 'HIDE_SPINNER' });
  })
};
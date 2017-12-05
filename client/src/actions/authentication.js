import { SERVER_URL } from '../config';
import handleErrors from './utilities';

export const signup = user => dispatch => {
  console.log('signup action');
  console.log(SERVER_URL);
  console.log(JSON.stringify(user, null, 2));
  fetch(`${SERVER_URL}/signup`, {
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
    console.log('SUCCESS!');
    console.log(JSON.stringify(response, null, 2));
  })
  .catch(error => {
    console.log('ERROR!');
    console.log(JSON.stringify(error, null, 2));
  });
};

export const login = credentials => dispatch => {
  console.log('login action');
  console.log(JSON.stringify(credentials, null, 2));
  fetch(``, {

  })
  .then(handleErrors)
  .then(response => response.json())
  .then(response => {
    console.log('SUCCESS!');
    console.log(JSON.stringify(response, null, 2));
  })
  .catch(error => {
    console.log('ERROR!');
    console.log(JSON.stringify(error, null, 2));
  });
};
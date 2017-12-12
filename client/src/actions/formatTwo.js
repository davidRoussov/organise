import { SERVER_URL } from '../config';
import handleErrors from './utilities';

export const getCategoriesAndNotes = () => dispatch => {
  dispatch({ type: 'LOADING' });

  fetch(`${SERVER_URL}/api/f2`, {
    credentials: 'include'
  })
  .then(handleErrors)
  .then(response => response.json())
  .then(response => {
    console.log('SUCCESS!!');
    console.log(JSON.stringify(response, null, 2));
  })
  .catch(error => {
    console.log("ERROR!");
    console.log(JSON.stringify(error, null, 2));
  })
  .then(() => dispatch({ type: 'DONE_LOADING' }));
};

export const createNewCategory = newCategory => dispatch => {
  dispatch({ type: 'LOADING_NEW_CATEGORY' });

  fetch(`${SERVER_URL}/api/f2/category`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ newCategory }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(handleErrors)
  .then(response => response.json())
  .then(repsonse => {
    console.log('SUCCESS');
    console.log(JSON.stringify(response, null, 2));
  })
  .catch(error => {
    console.log('ERROR!');
    console.log(JSON.stringify(error, null, 2));
  })
  .then(() => dispatch({ type: 'DONE_LOADING_NEW_CATEGORY' }));
}
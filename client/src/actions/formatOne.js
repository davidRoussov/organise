import { SERVER_URL } from '../config';
import handleErrors from './utilities';

export const saveNote = newNote => dispatch => {
  fetch(`${SERVER_URL}/api/f1`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ newNote }),
    headers: {
      'Content-Type': 'application/json'
    }
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

export const createNewTextarea = (x, y) => dispatch => {
  dispatch({
    type: 'CREATE_NEW_TEXTAREA',
    data: {
      x, y,
      isNew: true
    }
  });
};

export const removeNewNote = () => dispatch => {
  dispatch({
    type: 'REMOVE_NEW_TEXTAREA'
  });
};

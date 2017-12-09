import { SERVER_URL } from '../config';
import handleErrors from './utilities';

export const getAllNotes = () => dispatch => {
  dispatch({ type: 'LOADING' });
  fetch(`${SERVER_URL}/api/f1`, {
    credentials: 'include'
  })
  .then(handleErrors)
  .then(response => response.json())
  .then(response => {
    dispatch({
      type: 'GOT_ALL_F1_NOTES',
      data: response.notes
    });
  })
  .catch(error => {
    dispatch({
      type: 'ERROR_GETTING_ALL_F1_NOTES',
      data: error.message
    });
  });
};

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
    dispatch({
      type: 'ERROR_SAVING_F1_NOTE',
      data: error.message
    });
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

import { SERVER_URL } from '../config';
import handleErrors from './utilities';

export const createNote = categoryID => dispatch => {
  dispatch({ type: 'LOADING_NOTES' });

  fetch(`${SERVER_URL}/api/f2`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ categoryID }),
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

export const setCurrentCategory = categoryID => dispatch => 
  dispatch({ type: 'SETTING_CURRENT_F2_CATEGORY', categoryID });

export const getNotes = () => dispatch => {
  dispatch({ type: 'LOADING_NOTES' });

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
    dispatch({
      type: 'ERROR_GETTING_F2_NOTES',
      data: error.message || error.toString()
    });
  })
  .then(() => dispatch({ type: 'DONE_LOADING_NOTES' }));
};

export const getCategories = () => dispatch => {
  dispatch({ type: 'LOADING_CATEGORY' });

  fetch(`${SERVER_URL}/api/f2/category`, {
    credentials: 'include'
  })
  .then(handleErrors)
  .then(response => response.json())
  .then(response => {
    dispatch({
      type: 'GET_F2_CATEGORIES',
      data: response.categories
    });
  })
  .catch(error => {
    dispatch({
      type: 'ERROR_GETTING_F2_CATEGORIES',
      data: error.message || error.toString()
    });
  })
  .then(() => dispatch({ type: 'DONE_LOADING_CATEGORY' }));
};

export const createNewCategory = newCategory => dispatch => {
  dispatch({ type: 'LOADING_CATEGORY' });

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
  .then(response => {
    dispatch(getCategories());
  })
  .catch(error => {
    dispatch({
      type: 'ERROR_CREATING_NEW_F2_NOTE',
      data: error.message || error
    });
    dispatch({ type: 'DONE_LOADING_CATEGORY' });
  });
}
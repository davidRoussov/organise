import { SERVER_URL } from '../config';
import handleErrors from './utilities';
import { handleResponse } from './utilities';

export const deleteCategory = categoryID => dispatch => {
  dispatch({ type: 'SMALL_NETWORK_REQUEST' });
  
  fetch(`${SERVER_URL}/api/f3`, {
    method: 'DELETE',
    credentials: 'include',
    body: JSON.stringify({ categoryID }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(handleResponse)
  .then(response => {
    dispatch({ type: 'SMALL_NETWORK_REQUEST_SUCCESS' });
    dispatch({
      type: 'SUCCESS_DELETING_CATEGORY'
    });
    dispatch(getCategories());
  })
  .catch(errorMessage => {
    dispatch({ type: 'SMALL_NETWORK_REQUEST_FAIL' });
    dispatch({ type: 'ERROR_DELETING_CATEGORY', data: errorMessage });
  })
  .then(() => setTimeout(() => dispatch({ type: 'HIDE_MINI_INDICATOR' }), 3000));
};

export const saveCategory = newCategory => dispatch => {
  dispatch({ type: 'SMALL_NETWORK_REQUEST' });

  fetch(`${SERVER_URL}/api/f3`, {
    method: 'PUT',
    credentials: 'include',
    body: JSON.stringify({ newCategory }),
    headers: {
      'Content-Type': 'application/json' 
    }
  })
  .then(handleErrors)
  .then(response => response.json())
  .then(response => {
    dispatch({
      type: 'SMALL_NETWORK_REQUEST_SUCCESS',
      data: newCategory.id
    });
    dispatch(getCategories());
  })
  .catch(error => {
    dispatch({
      type: 'ERROR_SAVING_F3_NOTE',
      data: error.message
    });
  })
  .then(() => setTimeout(() => dispatch({ type: 'HIDE_MINI_INDICATOR' }), 3000));
}

export const setCurrentCategory = category => dispatch => 
  dispatch({ type: 'SETTING_CURRENT_F3_CATEGORY', category });


export const getCategories = () => dispatch => {
  dispatch({ type: 'LOADING_CATEGORY' });

  fetch(`${SERVER_URL}/api/f3`, {
    credentials: 'include'
  })
  .then(handleErrors)
  .then(response => response.json())
  .then(response => {
    dispatch({
      type: 'GET_F3_CATEGORIES',
      data: response.categories
    });
  })
  .catch(error => {
    dispatch({
      type: 'ERROR_GETTING_F3_CATEGORIES',
      data: error.message || error.toString()
    });
  })
  .then(() => dispatch({ type: 'DONE_LOADING_CATEGORY' }));
};

export const createNewCategory = newCategory => dispatch => {
  dispatch({ type: 'LOADING_CATEGORY' });

  fetch(`${SERVER_URL}/api/f3`, {
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
      type: 'ERROR_CREATING_NEW_F3_NOTE',
      data: error.message || error
    });
    dispatch({ type: 'DONE_LOADING_CATEGORY' });
  });
}
import { SERVER_URL } from '../config';
import handleErrors from './utilities';

export const deleteCategory = categoryID => dispatch => {
  dispatch({ type: 'LOADING_CATEGORY' });
  
  fetch(`${SERVER_URL}/api/f2/category`, {
    method: 'DELETE',
    credentials: 'include',
    body: JSON.stringify({ categoryID }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(handleErrors)
  .then(response => response.json())
  .then(response => {
    dispatch({
      type: 'SUCCESS_DELETING_CATEGORY'
    });
    dispatch(getCategories());
  })
  .then(error => {
    console.log('error', error);
  })
};

export const deleteNote = noteID => dispatch => {
  dispatch({ type: 'SMALL_NETWORK_REQUEST' });

  fetch(`${SERVER_URL}/api/f2`, {
    method: 'DELETE',
    credentials: 'include',
    body: JSON.stringify({ noteID }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(handleErrors)
  .then(response => response.json())
  .then(response => {
    dispatch({
      type: 'SMALL_NETWORK_REQUEST_SUCCESS',
    });
    dispatch(getNotes());
  })
  .catch(error => {
    dispatch({
      type: 'ERROR_DELETING_F2_NOTE',
      data: error.message
    });
  });
}

export const saveNote = note => dispatch => {
  // dispatch({ type: 'SMALL_NETWORK_REQUEST' });

  fetch(`${SERVER_URL}/api/f2`, {
    method: 'PUT',
    credentials: 'include',
    body: JSON.stringify({ note }),
    headers: {
      'Content-Type': 'application/json' 
    }
  })
  .then(handleErrors)
  .then(response => response.json())
  .then(response => {
    // dispatch({
    //   type: 'SMALL_NETWORK_REQUEST_SUCCESS',
    //   data: note.id
    // });
  })
  .catch(error => {
    dispatch({
      type: 'ERROR_SAVING_F2_NOTE',
      data: error.message
    });
  });
}

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
    dispatch(getNotes());
  })
  .catch(error => {
    dispatch({
      type: 'ERROR_CREATING_F2_NOTE',
      data: error.message
    });
  });
};

export const setCurrentCategory = categoryID => dispatch => 
  dispatch({ type: 'SETTING_CURRENT_F2_CATEGORY', categoryID });


export const getNotes = () => dispatch => {
  dispatch({ type: 'SMALL_NETWORK_REQUEST' });

  fetch(`${SERVER_URL}/api/f2`, {
    credentials: 'include'
  })
  .then(handleErrors)
  .then(response => response.json())
  .then(response => {
    dispatch({
      type: 'GET_F2_NOTES',
      data: response.notes
    });
    dispatch({ type: 'SMALL_NETWORK_REQUEST_SUCCESS' })
    setTimeout(() => dispatch({ type: 'HIDE_MINI_INDICATOR' }), 3000);
  })
  .catch(error => {
    dispatch({
      type: 'ERROR_GETTING_F2_NOTES',
      data: error.message || error.toString()
    });
  });
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
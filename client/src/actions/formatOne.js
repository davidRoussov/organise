// import SERVER_URL from '../config';


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

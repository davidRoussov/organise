



export const createNewTextarea = (x, y) => dispatch => {
  dispatch({
    type: 'CREATE_NEW_TEXTAREA',
    data: {
      x, y,
      isNew: true
    }
  });
};
const app = (state={}, action) => {
  switch(action.type) {
    case 'SHOW_SPINNER':
      return { ...state, spinnerVisible: true };
    case 'HIDE_SPINNER':
      return { ...state, spinnerVisible: false };
    case 'GET_USER_FAILED':
      return { ...state, displayErrorAlert: true, message: action.message };
    case 'GOT_USER':
      return { ...state, user: action.data };
    case 'HIDE_ALERTS':
      return { ...state, displayErrorAlert: false };
    default:
      return state;
  };
}

export default app;
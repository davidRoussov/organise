/*eslint-disable */

const authentication = (state={}, action) => {
  switch(action.type) {
    case 'SHOW_SPINNER':
      return { ...state, spinnerVisible: true };
    case 'HIDE_SPINNER':
      return { ...state, spinnerVisible: false };
    case 'LOGIN_FAILED':
      return { ...state, displayErrorAlert: true, alertMessage: action.message };
    case 'SIGNUP_FAILED':
      return { ...state, displayErrorAlert: true, alertMessage: action.message };
    case 'HIDE_ALERTS':
      return { ...state, displayErrorAlert: false };
    default:
      return state;
  };
};

export default authentication;
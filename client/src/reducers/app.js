/*eslint-disable */

const app = (state={}, action) => {
  switch(action.type) {
    case 'SHOW_SPINNER':
      return { ...state, spinnerVisible: true };
    case 'HIDE_SPINNER':
      return { ...state, spinnerVisible: false };
    case 'GET_USER_FAILED':
      return { ...state, displayAlert: true, alertMEssage: action.data };
    case 'GOT_USER':
      return { ...state, user: action.data };
    case 'HIDE_ALERTS':
      return { ...state, displayAlert: false };
    case 'ERROR_SAVING_F1_NOTE':
      return { ...state, displayAlert: true, alertMessage: action.data, alertType: 'error' };
    case 'ERROR_GETTING_ALL_F1_NOTES':
      return { ...state, displayAlert: true, alertMessage: action.data, alertType: 'error' };
    case 'ERROR_CREATING_NEW_F2_NOTE':
      return { ...state, displayAlert: true, alertMessage: action.data, alertType: 'error' };
    case 'ERROR_GETTING_F2_NOTES':
      return { ...state, displayAlert: true, alertMessage: action.data, alertType: 'error' };
    case 'ERROR_GETTING_F2_CATEGORIES':
      return { ...state, displayAlert: true, alertMessage: action.data, alertType: 'error' };
    case 'ERROR_CREATING_F2_NOTE':
      return { ...state, displayAlert: true, alertMessage: action.data, alertType: 'error' };
    default: 
      return state;
  };
}

export default app;
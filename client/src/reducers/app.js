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
    case 'SUCCESS_DELETING_CATEGORY':
      return { ...state, displayAlert: true, alertMessage: 'Successfully deleted category', alertType: 'success' };
    case 'ERROR_EDITING_F3_CATEGORY':
      return { ...state, displayAlert: true, alertMessage: action.data, alertType: 'error' };
    case 'SUCCESS_EDITING_F3_CATEGORY':
      return { ...state, displayAlert: true, alertMessage: 'Successfully modified category', alertType: 'success' };
    case 'SMALL_NETWORK_REQUEST':
      return { ...state, miniLoading: true, miniVisible: true };
    case 'SMALL_NETWORK_REQUEST_SUCCESS':
      return { ...state, miniLoading: false, miniVisible: true };
    case 'SMALL_NETWORK_REQUEST_FAIL':
      return { ...state, miniLoading: false, miniVisible: true, miniFail: true };
    case 'HIDE_MINI_INDICATOR':
      return { ...state, miniLoading: false, miniVisible: false };
    default: 
      return state;
  };
}

export default app;
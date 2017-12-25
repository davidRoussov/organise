const defaultState = {
  categories: []
};

const formatThree = (state=defaultState, action) => {
  switch(action.type) {
    case 'LOADING_CATEGORY':
      return { ...state, addCategorySpinnerVisible: true };
    case 'DONE_LOADING_CATEGORY':
      return { ...state, addCategorySpinnerVisible: false };
    case 'GET_F3_CATEGORIES':
      return { ...state, categories: action.data };
    case 'SETTING_CURRENT_F3_CATEGORY':
      return { ...state, currentCategory: action.categoryID };
    case 'LOADING_NOTES':
      return { ...state, mainContentSpinnerVisible: true };
    case 'DONE_LOADING_NOTES':
      return { ...state, mainContentSpinnerVisible: false };
    case 'GET_F3_NOTES':
      return { ...state, notes: action.data };
    default:
      return state;
  }
}

export default formatThree;
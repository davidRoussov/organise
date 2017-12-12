
const formatTwo = (state={}, action) => {
  switch(action.type) {
    case 'LOADING_NEW_CATEGORY':
      return { ...state, addCategorySpinnerVisible: true };
    case 'DONE_LOADING_NEW_CATEGORY':
      return { ...state, addCategorySpinnerVisible: false };
    default:
      return state;
  }
}

export default formatTwo;
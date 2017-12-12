const defaultState = {
  categories: []
};

const formatTwo = (state=defaultState, action) => {
  switch(action.type) {
    case 'LOADING_CATEGORY':
      return { ...state, addCategorySpinnerVisible: true };
    case 'DONE_LOADING_CATEGORY':
      return { ...state, addCategorySpinnerVisible: false };
    case 'GET_F2_CATEGORIES':
      return { ...state, categories: action.data };
    default:
      return state;
  }
}

export default formatTwo;
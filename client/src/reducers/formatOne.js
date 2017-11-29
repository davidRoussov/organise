const initialState = {
  notes: []
};

const formatOne = (state = initialState, action) => {
  switch(action.type) {
    case 'CREATE_NEW_TEXTAREA':
      return { ...state, 
        notes: [ ...state.notes, action.data],
        disableCreateNew: true
      };
    default:
      return state;
  }
};

export default formatOne;
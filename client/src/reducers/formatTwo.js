const defaultState = {
  categories: [],
  currentCategory: null
};

const formatTwo = (state=defaultState, action) => {
  switch(action.type) {
    case 'LOADING_CATEGORY':
      return { ...state, addCategorySpinnerVisible: true };
    case 'DONE_LOADING_CATEGORY':
      return { ...state, addCategorySpinnerVisible: false };
    case 'GET_F2_CATEGORIES':
      return { ...state, categories: action.data };
    case 'SETTING_CURRENT_F2_CATEGORY':
      return { ...state, currentCategory: action.categoryID };
    case 'LOADING_NOTES':
      return { ...state, mainContentSpinnerVisible: true };
    case 'DONE_LOADING_NOTES':
      return { ...state, mainContentSpinnerVisible: false };
    case 'GET_F2_NOTES':
      return { ...state, notes: action.data };
    case 'SETTING_F2_NOTE':
      const newNote = action.data;

      const newNotes = state.notes.map(note => {
        if (note.id === newNote.id) {
          return newNote;
        } else {
          return note
        }
      });

      return { ...state, notes: newNotes };
    default:
      return state;
  }
}

export default formatTwo;
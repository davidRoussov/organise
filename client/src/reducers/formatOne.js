const initialState = {
  notes: []
};

const formatOne = (state = initialState, action) => {
  switch(action.type) {
    case 'CREATE_NEW_TEXTAREA':
      return { ...state, 
        notes: [ ...state.notes, action.data]
      };
    case 'REMOVE_NEW_TEXTAREA':
      const newNotes = state.notes.filter(note => !note.isNew);
      return { ...state, notes: newNotes };
    default:
      return state;
  }
};

export default formatOne;
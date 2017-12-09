const initialState = {
  notes: [],
  writeAreaDisabled: true
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
    case 'GOT_ALL_F1_NOTES':
      const mergedNotes = state.notes.concat(action.data);
      return { ...state, notes: mergedNotes, writeAreaDisabled: false };
    default:
      return state;
  }
};

export default formatOne;
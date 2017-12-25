const initialState = {
  timetableSettingsModalVisible: false
};

const timetable = (state=initialState, action) => {
  switch(action.type) {
    case 'TRIGGER_TIMETABLE_MODAL':
      return { ...state, timetableSettingsModalVisible: true };
    default:
      return state;
  }
}

export default timetable;
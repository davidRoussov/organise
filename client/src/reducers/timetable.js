const initialState = {
  timetableSettingsModalVisible: false
};

const timetable = (state=initialState, action) => {
  switch(action.type) {
    case 'TRIGGER_TIMETABLE_MODAL':
      return { ...state, timetableSettingsModalVisible: true };
    case 'CLOSE_TIMETABLE_MODAL':
      return { ...state, timetableSettingsModalVisible: false };
    case 'GET_TIMETABLE_DATA':
      return { ...state, timetableData: action.data };
    default:
      return state;
  }
}

export default timetable;
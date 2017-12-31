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
    case 'SUCCESS_UPDATING_TIMETABLE_CELL':
      return { ...state, redToBlack: true };
    case 'SHOW_TIMETABLE_COLOR_BUTTONS':
      return { ...state, colorButtonsVisible: true };
    case 'HIDE_TIMETABLE_COLOR_BUTTONS':
      return { ...state, colorButtonsVisible: false };
    default:
      return state;
  }
}

export default timetable;
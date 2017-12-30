import mongoose from 'mongoose';

const TimetableSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true
  },
  visibleTimes: {
    type: {
      "00:00": Boolean,
      "01:00": Boolean,
      "02:00": Boolean,
      "03:00": Boolean,
      "04:00": Boolean,
      "05:00": Boolean,
      "06:00": Boolean,
      "07:00": Boolean,
      "08:00": Boolean,
      "09:00": Boolean,
      "10:00": Boolean,
      "11:00": Boolean,
      "12:00": Boolean,
      "13:00": Boolean,
      "14:00": Boolean,
      "15:00": Boolean,
      "16:00": Boolean,
      "17:00": Boolean,
      "18:00": Boolean,
      "19:00": Boolean,
      "20:00": Boolean,
      "21:00": Boolean,
      "22:00": Boolean,
      "23:00": Boolean
    }
  }
});

TimetableSchema.statics.saveVisibleTimes = (userID, newTimes) => new Promise((resolve, reject) => {
  Timetable.findOneAndUpdate({ userID }, { visibleTimes: newTimes }, { upsert: true },  error => {
    if(error) {
      console.error('Unable to execute Mongo query');
      reject(error);
    } else {
      resolve();
    }
  });
});

const Timetable = mongoose.model('Timetable', TimetableSchema);
export default Timetable;
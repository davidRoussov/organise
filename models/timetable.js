import mongoose from 'mongoose';

const TimetableSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true
  },
  visibleTimes: {
    type: {
      "00:00 - 01:00": Boolean,
      "01:00 - 02:00": Boolean,
      "02:00 - 03:00": Boolean,
      "03:00 - 04:00": Boolean,
      "04:00 - 05:00": Boolean,
      "05:00 - 06:00": Boolean,
      "06:00 - 07:00": Boolean,
      "07:00 - 08:00": Boolean,
      "08:00 - 09:00": Boolean,
      "09:00 - 10:00": Boolean,
      "10:00 - 11:00": Boolean,
      "11:00 - 12:00": Boolean,
      "12:00 - 13:00": Boolean,
      "13:00 - 14:00": Boolean,
      "14:00 - 15:00": Boolean,
      "15:00 - 16:00": Boolean,
      "16:00 - 17:00": Boolean,
      "17:00 - 18:00": Boolean,
      "18:00 - 19:00": Boolean,
      "19:00 - 20:00": Boolean,
      "20:00 - 21:00": Boolean,
      "21:00 - 22:00": Boolean,
      "22:00 - 23:00": Boolean,
      "23:00 - 00:00": Boolean
    }
  },
  data: {
    type: {
      "00:00 - 01:00": {
         "monday": String,
         "tuesday": String,
         "wednesday": String,
         "thursday": String,
         "friday": String,
         "saturday": String,
         "sunday": String 
      },
      "01:00 - 02:00": {
         "monday": String,
         "tuesday": String,
         "wednesday": String,
         "thursday": String,
         "friday": String,
         "saturday": String,
         "sunday": String 
      },
      "02:00 - 03:00": {
         "monday": String,
         "tuesday": String,
         "wednesday": String,
         "thursday": String,
         "friday": String,
         "saturday": String,
         "sunday": String 
      },
      "03:00 - 04:00": {
         "monday": String,
         "tuesday": String,
         "wednesday": String,
         "thursday": String,
         "friday": String,
         "saturday": String,
         "sunday": String 
      },
      "04:00 - 05:00": {
         "monday": String,
         "tuesday": String,
         "wednesday": String,
         "thursday": String,
         "friday": String,
         "saturday": String,
         "sunday": String 
      },
      "05:00 - 06:00": {
         "monday": String,
         "tuesday": String,
         "wednesday": String,
         "thursday": String,
         "friday": String,
         "saturday": String,
         "sunday": String 
      },
      "06:00 - 07:00": {
         "monday": String,
         "tuesday": String,
         "wednesday": String,
         "thursday": String,
         "friday": String,
         "saturday": String,
         "sunday": String 
      },
      "07:00 - 08:00": {
         "monday": String,
         "tuesday": String,
         "wednesday": String,
         "thursday": String,
         "friday": String,
         "saturday": String,
         "sunday": String 
      },
      "08:00 - 09:00": {
         "monday": String,
         "tuesday": String,
         "wednesday": String,
         "thursday": String,
         "friday": String,
         "saturday": String,
         "sunday": String 
      },
      "09:00 - 10:00": {
         "monday": String,
         "tuesday": String,
         "wednesday": String,
         "thursday": String,
         "friday": String,
         "saturday": String,
         "sunday": String 
      },
      "10:00 - 11:00": {
         "monday": String,
         "tuesday": String,
         "wednesday": String,
         "thursday": String,
         "friday": String,
         "saturday": String,
         "sunday": String 
      },
      "11:00 - 12:00": {
         "monday": String,
         "tuesday": String,
         "wednesday": String,
         "thursday": String,
         "friday": String,
         "saturday": String,
         "sunday": String 
      },
      "12:00 - 13:00": {
         "monday": String,
         "tuesday": String,
         "wednesday": String,
         "thursday": String,
         "friday": String,
         "saturday": String,
         "sunday": String 
      },
      "13:00 - 14:00": {
         "monday": String,
         "tuesday": String,
         "wednesday": String,
         "thursday": String,
         "friday": String,
         "saturday": String,
         "sunday": String 
      },
      "14:00 - 15:00": {
         "monday": String,
         "tuesday": String,
         "wednesday": String,
         "thursday": String,
         "friday": String,
         "saturday": String,
         "sunday": String 
      },
      "15:00 - 16:00": {
         "monday": String,
         "tuesday": String,
         "wednesday": String,
         "thursday": String,
         "friday": String,
         "saturday": String,
         "sunday": String 
      },
      "16:00 - 17:00": {
         "monday": String,
         "tuesday": String,
         "wednesday": String,
         "thursday": String,
         "friday": String,
         "saturday": String,
         "sunday": String 
      },
      "17:00 - 18:00": {
         "monday": String,
         "tuesday": String,
         "wednesday": String,
         "thursday": String,
         "friday": String,
         "saturday": String,
         "sunday": String 
      },
      "18:00 - 19:00": {
         "monday": String,
         "tuesday": String,
         "wednesday": String,
         "thursday": String,
         "friday": String,
         "saturday": String,
         "sunday": String 
      },
      "19:00 - 20:00": {
         "monday": String,
         "tuesday": String,
         "wednesday": String,
         "thursday": String,
         "friday": String,
         "saturday": String,
         "sunday": String 
      },
      "20:00 - 21:00": {
         "monday": String,
         "tuesday": String,
         "wednesday": String,
         "thursday": String,
         "friday": String,
         "saturday": String,
         "sunday": String 
      },
      "21:00 - 22:00": {
         "monday": String,
         "tuesday": String,
         "wednesday": String,
         "thursday": String,
         "friday": String,
         "saturday": String,
         "sunday": String 
      },
      "22:00 - 23:00": {
         "monday": String,
         "tuesday": String,
         "wednesday": String,
         "thursday": String,
         "friday": String,
         "saturday": String,
         "sunday": String 
      },
      "23:00 - 00:00": {
         "monday": String,
         "tuesday": String,
         "wednesday": String,
         "thursday": String,
         "friday": String,
         "saturday": String,
         "sunday": String 
      }
    }
  }
});

TimetableSchema.statics.updateCell = (userID, time, day, text) => new Promise((resolve, reject) => {
  const location = `data.${time}.${day}`

  Timetable.findOneAndUpdate({ userID }, { $set: { [location]: text } }, { upsert: true }, error => {
    if(error) {
      console.log('Unable to execute Mongo query');
      reject(error);
    } else {
      resolve();
    }
  });
});

TimetableSchema.statics.get = userID => new Promise((resolve, reject) => {
  Timetable.find({ userID }, (error, results) => {
    if(error) {
      console.log('Unable to execute Mongo query');
      reject(error);
    } else {
      const pruned = results.map(result => ({
        visibleTimes: result.visibleTimes,
        data: result.data
      }));
      resolve(pruned);
    }
  });
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
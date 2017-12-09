import mongoose from 'mongoose';

const F1Schema = new mongoose.Schema({
  userID: {
    type: String,
    required: true
  },
  x: {
    type: Number,
    required: true
  },
  y: {
    type: Number,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

F1Schema.statics.getAllNotes = userID => new Promise((resolve, reject) => {
  F1.find({ userID }, (err, notes) => {
      if(err) {
        console.error('Unable to execute Mongo query');
        console.error(err);
        reject('A database error occurred getting F1 notes');
      } else {
        const pertinentData = notes.map(note => ({
          id: note._id,
          x: note.x,
          y: note.y,
          text: note.text
        }));
        resolve(pertinentData);
      }
  });
});

F1Schema.statics.save = (userID, note) => new Promise((resolve, reject) => {
  if(note.isNew || !note._id) {
    const f1 = new F1({
      userID,
      x: note.x,
      y: note.y,
      text: note.text
    });
    f1.save((err, results) => {
      if(err) {
        console.error('Unable to execute mongo query');
        console.error(err);
        reject('A database error occurred');
      } else {
        console.log(JSON.stringify(results, null, 2));
        resolve();
      }
    });
  } else {

  }
});

const F1 = mongoose.model('F1', F1Schema);
export default F1;
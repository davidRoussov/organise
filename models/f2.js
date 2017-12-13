import mongoose from 'mongoose';

const F2Schema = new mongoose.Schema({
  userID: {
    type: String,
    required: true
  },
  categoryID: {
    type: String,
    required: true
  },
  heading: {
    type: String
  },
  items: {
    type: [String]
  }
});

F2Schema.statics.createNote = (userID, categoryID) => new Promise((resolve, reject) => {
  const f2 = new F2({
    userID,
    categoryID,
    heading: '',
    items: []
  });
  f2.save((err, results) => {
    if(err) {
      console.error('Unable to execute mongo query');
      console.error(err);
      reject('A database error occurred creating the new category');
    } else {
      resolve();
    }
  });
});

const F2 = mongoose.model('F2', F2Schema);
export default F2;
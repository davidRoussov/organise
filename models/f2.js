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

F2Schema.statics.deleteNote = noteID => new Promise((resolve, reject) => {
  F2.findOneAndRemove({ _id: noteID }, error => {
    if(error) {
      console.error('Unable to execute Mongo query');
      reject(error);
    } else {
      resolve();
    }
  });
});

F2Schema.statics.saveNote = note => new Promise((resolve, reject) => {
  F2.findOneAndUpdate({ _id: note.id }, note, (error) => {
    if(error) {
      console.error('Unable to execute Mongo query');
      console.error(error);
      reject();
    } else {
      resolve();  
    }
  });
});

F2Schema.statics.getNotes = userID => new Promise((resolve, reject) => {
  F2.find({ userID }, (error, results) => {
    if(error) {
      console.error('Unable to execute Mongo query');
      reject(error);
    } else {
      const pertinentData = results.map(note => ({
        id: note._id,
        categoryID: note.categoryID,
        heading: note.heading,
        items: note.items
      }));
      resolve(pertinentData);
    }
  });
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
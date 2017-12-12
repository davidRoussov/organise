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
    type: String,
    required: true
  },
  items: {
    type: [String]
  }
});

const F2 = mongoose.model('F2', F2Schema);
export default F2;
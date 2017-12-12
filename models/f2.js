import mongoose from 'mongoose';

const F2Schema = new mongoose.Schema({
  userID: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});
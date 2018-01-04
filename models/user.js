import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  emailAddress: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.statics.authenticate = (emailAddress, password, callback) => {
  User.findOne({ emailAddress })
    .exec((err, user) => {
      if(err) {
        console.log('unable to execute mongo query');
        return callback(err);
      } else if (!user) {
        let err = new Error('User not found by that email address');
        err.status = 401;
        return callback(err);
      } else {
        bcrypt.compare(password, user.password, (err, result) => {
          if(result === true) return callback(null, user);
          else return callback();
        });
      }
    });
};

UserSchema.statics.get = userID => new Promise((resolve, reject) => {
  User.findOne({ _id: userID })
    .exec((err, user) => {
      if(err) {
        console.error('Unable to execute Mongo query');
        console.error(err);
        reject('A database error occurred');
      } else if(!user) {
        console.error('Unable to find user by the provided id');
        reject('Invalid session cookie sent');
      } else {
        resolve(user);
      }
    });
});

const User = mongoose.model('User', UserSchema);
export default User;
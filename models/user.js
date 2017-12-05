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

const User = mongoose.model('User', UserSchema);
export default User;
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String
  },
  lastname: {
    type: String
  },
  number: {
    type: Number
  },
  password: {
     type: String
  }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;


const { Schema } =  require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String
  },
  lastname: {
    type: String
  },
  age: {
    type: Number
  }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;

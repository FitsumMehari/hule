const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  agreeTermAndCondition: {
    type: Boolean,
    default: true
  },
  password: String,
  user_email: String,
  user_father_name: String,
  user_first_name: String,
  user_last_name: String,
  user_phone_number: Number,
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
})

module.exports = mongoose.model('user', UserSchema);

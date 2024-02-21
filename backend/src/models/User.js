const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  gender: {
    type: String,
  },
  nationality: {
    type: String,
  },
  occupation: {
    type: String,
  },
  interests: {
    type: [String],
  },
  profilePicture: {
    type: String, // Assuming you save file paths or URLs
  },
  additionalNotes: {
    type: String,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

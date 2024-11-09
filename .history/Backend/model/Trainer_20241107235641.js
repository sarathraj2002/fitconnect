const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  username  
  email: { type: String, required: true },
  password: { type: String, required: true },
  certifications: { type: String },
  experience: { type: String },
  // other trainer details like profile, etc.
});

module.exports = mongoose.model('Trainer', trainerSchema);

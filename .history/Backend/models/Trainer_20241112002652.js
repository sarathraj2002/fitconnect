const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  username  : { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
  certifications: { type: String },
  experience: { type: String },
  
});

module.exports = mongoose.model('Trainer', trainerSchema);

const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  username  : { 
    type: String, 
    required: false 
  },
  email: { 
    type: String, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  },

  experience: {
    type: Number,
    required: true,
    min: 0
  },
  certifications: {
    type: [String],
    default: []
  },
  specialization: {
    type: String,
    required: true,
    enum:["Yoga", "Strength Training", "Cardio"],
    default: ''  
  },
  biography: {
    type: String,
    maxlength: 500
  },
  availability: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Flexible'],
    default: 'Flexible'
  },
 
  profilePicture: {
    type: String,
    default: '' 
  },
 
  
});

module.exports = mongoose.model('trainer', trainerSchema);

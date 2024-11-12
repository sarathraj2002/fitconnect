const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  username  : { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
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
    type: [String],
    required: true,
    enum:
    default: []  // e.g., ["Yoga", "Strength Training", "Cardio"]
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
  hourlyRate: {
    type: Number,
    required: true,
    min: 0
  },
  profilePicture: {
    type: String,
    default: ''  // URL of the image
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  totalReviews: {
    type: Number,
    default: 0
  },
  registrationStatus: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
  
});

module.exports = mongoose.model('Trainer', trainerSchema);

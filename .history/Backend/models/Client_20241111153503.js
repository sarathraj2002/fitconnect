const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  username:{type:String,required:flase}  ,
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  fitnessGoals: { type: String },
  fitnessLevel: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Beginner' },
  height: { type: Number },
  weight: { type: Number },
  dietaryPreferences: { type: String ,enum:['veg','nonveg']},
  preferredWorkoutTypes: [{ type: String }],
  dailyActivityLevel: { type: String, enum: ['Sedentary', 'Moderately active', 'Highly active'] },
  languagesSpoken: [{ type: String }],
  location: { type: String },
});

module.exports = mongoose.model('client', clientSchema);
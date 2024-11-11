const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String },  // Admin role
});

module.exports = mongoose.model('Admin', adminSchema);

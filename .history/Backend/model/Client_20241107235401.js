const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  // other client details like profile, etc.
});

module.exports = mongoose.model('Client', clientSchema);

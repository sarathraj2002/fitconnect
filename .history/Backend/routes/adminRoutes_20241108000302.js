const express = require('express');
const Admin = require('../models/Admin');
const router = express.Router();

// Admin route for viewing and managing users
router.get('/dashboard', async (req, res) => {
  // Example: Get the count of clients and trainers
  const clients = await Client.countDocuments();
  const trainers = await Trainer.countDocuments();
  res.json({ clients, trainers });
});

module.exports = router;

// const express = require('express');
// const Admin = require('../models/Admin');
// const router = express.Router();

// // Admin route for viewing and managing users
// router.get('/dashboard', async (req, res) => {
//   // Example: Get the count of clients and trainers
//   const clients = await Client.countDocuments();
//   const trainers = await Trainer.countDocuments();
//   res.json({ clients, trainers });
// });

// module.exports = router;

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const Client = require('../models/Client');
const Trainer = require('../models/Trainer');
re
const router = express.Router();

// Admin login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });

  if (!admin) {
    return res.status(404).json({ message: 'Admin not found' });
  }

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ adminId: admin._id }, 'secretkey', { expiresIn: '1h' });
  res.json({ token });
});

// Get admin dashboard data: list of clients and trainers
router.get('/dashboard', async (req, res) => {
  try {
    const clients = await Client.find();
    const trainers = await Trainer.find();
    res.json({ clients, trainers });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users data' });
  }
});

// Block a client
router.post('/block-client', async (req, res) => {
  const { clientId } = req.body;

  try {
    await Client.findByIdAndUpdate(clientId, { blocked: true });
    res.status(200).json({ message: 'Client blocked successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error blocking client' });
  }
});

// Block a trainer
router.post('/block-trainer', async (req, res) => {
  const { trainerId } = req.body;

  try {
    await Trainer.findByIdAndUpdate(trainerId, { blocked: true });
    res.status(200).json({ message: 'Trainer blocked successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error blocking trainer' });
  }
});

// Unblock a client
router.post('/unblock-client', async (req, res) => {
  const { clientId } = req.body;

  try {
    await Client.findByIdAndUpdate(clientId, { blocked: false });
    res.status(200).json({ message: 'Client unblocked successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error unblocking client' });
  }
});

// Unblock a trainer
router.post('/unblock-trainer', async (req, res) => {
  const { trainerId } = req.body;

  try {
    await Trainer.findByIdAndUpdate(trainerId, { blocked: false });
    res.status(200).json({ message: 'Trainer unblocked successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error unblocking trainer' });
  }
});

// Update client details
router.post('/update-client', async (req, res) => {
  const { clientId, updatedDetails } = req.body;

  try {
    await Client.findByIdAndUpdate(clientId, updatedDetails);
    res.status(200).json({ message: 'Client updated successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating client' });
  }
});

// Update trainer details
router.post('/update-trainer', async (req, res) => {
  const { trainerId, updatedDetails } = req.body;

  try {
    await Trainer.findByIdAndUpdate(trainerId, updatedDetails);
    res.status(200).json({ message: 'Trainer updated successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating trainer' });
  }
});

module.exports = router;

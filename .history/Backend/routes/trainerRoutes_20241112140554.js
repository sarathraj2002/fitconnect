const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Trainer = require('../models/Trainer');

const router = express.Router();

// Trainer Registration
router.post('/register', async (req, res) => {
  const data = req.body;  // Get all data from the request body

  try {
    // Create a new Trainer instance with all provided data, without password hashing
    const newTrainer = new Trainer({
      ...data
    });

    await newTrainer.save();
    res.status(201).json({ message: 'Trainer registered successfully!' });
  } catch (err) {
    console.error('Error registering trainer:', err);
    res.status(400).json({ message: 'Error registering trainer' });
  }
});


// Trainer Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const trainer = await Trainer.findOne({ email });

  if (!trainer) {
    return res.status(404).json({ message: 'Trainer not found' });
  }

  const isMatch = await bcrypt.compare(password, trainer.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ trainerId: trainer._id }, 'secretkey', { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;

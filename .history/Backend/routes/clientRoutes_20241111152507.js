const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Client = require('../models/Client');
const Trainer = require('../models/Trainer');
require('../db/db');
const router = express.Router();
router.use(express.json());

// Client Registration
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the email already exists
    const existingClient = await Client.findOne({ email });
    if (existingClient) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    const newClient = new Client({ email, password: hashedPassword });

    // Save new client to the database
    await newClient.save();
    res.status(201).json({ message: 'Client registered successfully!' });
  } catch (err) {
    console.error('Error registering client:', err);
    res.status(500).json({ message: 'Error registering client' });
  }
});

// Client Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const client = await Client.findOne({ email });
  
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    const isMatch = await bcrypt.compare(password, client.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ clientId: client._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({
      token,
      clientId: client._id,
      message: 'Login successful'
    });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Error logging in' });
  }
});

// Route to get all non-blocked trainers
router.get('/trainers', async (req, res) => {
  try {
    const trainers = await Trainer.find({ blocked: false }); // Fetch only non-blocked trainers
    res.json(trainers);
  } catch (error) {
    console.error('Error fetching trainers:', error);
    res.status(500).json({ message: 'Error fetching trainers' });
  }
});

module.exports = router;

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Client = require('../models/Client');
const Trainer = require('../models/Trainer');
require('../db/db')
const router = express.Router();
router.use(express.json())
// Client Registration
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newClient = new Client({ email, password: hashedPassword });

  try {
    await newClient.save();
    res.status(201).json({ message: 'Client registered successfully!' });
  } catch (err) {
    res.status(400).json({ message: 'Error registering client' });
  }
});

// Client Login
router.post('/api/client/login', async (req, res) => {
  const { email, password } = req.body;
  const client = await Client.findOne({ email });

  if (!client) {
    return res.status(404).json({ message: 'Client not found' });
  }

  const isMatch = await bcrypt.compare(password, client.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ clientId: client._id }, 'secretkey', { expiresIn: '1h' });
  res.json({ token });
});



// Route to get all trainers
router.get('/trainers', async (req, res) => {
  try {
    const trainers = await Trainer.find({ blocked: false }); // Fetch only non-blocked trainers
    res.json(trainers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trainers' });
  }
});



module.exports = router;

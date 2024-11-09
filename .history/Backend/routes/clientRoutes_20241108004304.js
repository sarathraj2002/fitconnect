const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Client = require('../models/Client');
require
const router = express.Router();

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
router.post('/login', async (req, res) => {
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

module.exports = router;

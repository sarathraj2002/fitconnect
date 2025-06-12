const express = require('express');
const Admin = require('../models/Admin');
require('../db/db');  
const router = express.Router();
router.use(express.json());

// Admin Registration Route
router.post('/register', async (req, res) => {

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const newAdmin = new Admin({ username, password });
    await newAdmin.save();
    res.status(201).json({ message: 'Admin registered successfully!' });
  } catch (err) {
    console.error('Error registering admin:', err);
    res.status(500).json({ message: 'Error registering admin' });
  }
});


// Admin Login Route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the admin by username
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Check if the provided password matches the stored password
    if (admin.password !== password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.json({
      message: 'Login successful',
      adminId: admin._id
    });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Error logging in' });
  }
});

module.exports = router;

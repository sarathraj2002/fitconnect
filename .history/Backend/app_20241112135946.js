
const express = require('express');
const cors = require('cors');
const socketio = require('socket.io');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors()); 
app.use(express.json()); 

// Import the database connection (assumes it's handled in a separate file)
require('./db/db'); // Adjust the path as needed if your file is in a different location

// Routes
const user=require('./routes/clientRoutes');
app.use('/api/client',user );
app.use('/api/trainer', require('./routes/trainerRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
const data = require('./routes/loginRoutes');
app.use('/api/login', data);


// Test route to confirm backend is running
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is connected!' });
});

// Start the server
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Socket.io setup
const io = socketio(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

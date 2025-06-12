import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    email: '', // Changed username to email to match backend
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', credentials);
      setSuccess('Login successful!');
      setError('');
      // Store token if needed for session handling
      localStorage.setItem('token', response.data.token); // Optional: store token
      console.log('Trainer ID:', response.data.trainerId);
      navigate('/'); // Redirect to home or trainer dashboard
    } catch (err) {
      setError(err.response?.data?.message || 'Error during login');
      setSuccess('');
    }
  };

  const register = () => {
    navigate('/trainerregister');
  };

  return (
    <div className="admin-login-container">
      <h2>Trainer Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email" // Changed to email input type
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <br />
        <button type="button" onClick={register}>Create an Account</button>
      </form>
    </div>
  );
};

export default AdminLogin;

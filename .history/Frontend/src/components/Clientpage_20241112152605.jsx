import React, { useState } from 'react';
import axios from 'axios';
import './ClientPage.css'; // Optional: Add CSS styling for the component
import { useNavigate } from 'react-router-dom';


const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate=useNavigate();
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
      const response = await axios.post('http://localhost:5000/api/login//login', credentials);
      setSuccess('Login successful!');
      setError('');
      // Optionally, redirect or save admin details
      console.log('Admin ID:', response.data.adminId);
      navigate('/trainerlist');
    } catch (err) {
      setError(err.response?.data?.message || 'Error during login');
      setSuccess('');
    }
  };
  const register=()=>{
    navigate('/register');


  }

  return (
    <div className="admin-login-container">
      <h2>Client Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
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
        <br/>
        <button onClick={register}>Create an Account</button>

      </form>
    </div>
  );
};

export default AdminLogin;

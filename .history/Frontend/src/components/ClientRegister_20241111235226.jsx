import React, { useState } from 'react';
import axios from 'axios';
import './ClientRegister.css'; 
import { useNavigate } from 'react-router-dom';

const ClientRegister = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: '',
    gender: '',
    fitnessGoals: '',
    fitnessLevel: '',
    height: '',
    weight: { type: Number },
    dietaryPreferences: { type: String ,enum:['veg','nonveg']},
    preferredWorkoutTypes: [{ type: String }],
    dailyActivityLevel: { type: String, enum: ['Sedentary', 'Moderately active', 'Highly active'] },
    languagesSpoken: [{ type: String }],
    location:
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      
      const data = {
        username: formData.email,  
        password: formData.password,
      };
      const response = await axios.post('http://localhost:5000/api/login/register', data);
      setSuccess('Registration successful! Please log in.');
      setError('');
      setFormData({ email: '', password: '' });
  
      setTimeout(() => {
        navigate('/client');
      }, 1000);
    } catch (err) {
      setError(err.response?.data?.message || 'Error during registration');
      setSuccess('');
    }
  };
  

  return (
    <div className="client-register-container">
      <h2>Client Registration</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Register</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
      </form>
    </div>
  );
};

export default ClientRegister;

import React, { useState } from 'react';
import axios from 'axios';
import './ClientRegister.css'; 
import { useNavigate } from 'react-router-dom';

const GENDER_OPTIONS = ["Male", "Female", "Other"];
const FITNESS_LEVEL_OPTIONS = ["Beginner", "Intermediate", "Advanced"];
const ACTIVITY_LEVEL_OPTIONS = ["Sedentary", "Lightly Active", "Moderately Active", "Very Active"];
const LANGUAGE_OPTIONS = ["English", "Spanish", "French", "German", "Other"];

const ClientRegister = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    gender: '',
    fitnessGoals: '',
    fitnessLevel: '',
    height: '',
    weight: '',
    dietaryPreferences: '',
    preferredWorkoutTypes: '',
    dailyActivityLevel: '',
    languagesSpoken: '',
    location:''
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
      setFormData({ 
         email: '',
         password: '' });
  
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
         <input
          type="gender"
          name="gender"
          placeholder="gender"
          value={formData.gender}
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
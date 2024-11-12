import React, { useState } from 'react';
import axios from 'axios';
import './TrainerRegister.css'; 
import { useNavigate } from 'react-router-dom';

const SPECIALIZATION_OPTIONS = ["Yoga", "Strength Training", "Cardio"];
const AVAILABILITY_OPTIONS = ["Full-time", "Part-time", "Flexible"];

const TrainerRegister = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    experience: '',
    certifications: '',
    specialization: '',
    biography: '',
    availability: '',
    profilePicture: ''
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
      const response = await axios.post('http://localhost:5000/api/trainer/register', formData);
      setSuccess('Registration successful! Please wait for approval.');
      setError('');
      setFormData({
        email: '',
        password: '',
        experience: '',
        certifications: '',
        specialization: '',
        biography: '',
        availability: '',
        profilePicture: ''
      });

      setTimeout(() => {
        navigate('/trainer');
      }, 1000);
    } catch (err) {
      setError(err.response?.data?.message || 'Error during registration');
      setSuccess('');
    }
  };

  return (
    <div className="trainer-register-container">
      <h2>Trainer Registration</h2>
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
          type="number"
          name="experience"
          placeholder="Experience (in years)"
          value={formData.experience}
          onChange={handle

import React, { useState } from 'react';
import axios from 'axios';
import './ClientRegister.css'; 
import { useNavigate } from 'react-router-dom';

const GENDER_OPTIONS = ["Male", "Female", "Other"];
const FITNESS_LEVEL_OPTIONS = ["Beginner", "Intermediate", "Advanced"];
const ACTIVITY_LEVEL_OPTIONS = ["Sedentary", "Lightly Active", "Moderately Active", "Very Active"];
const LANGUAGE_OPTIONS = ["English", "Spanish", "French", "German", "Other"];
const DIETARY_PREFERENCE_OPTIONS = ["Vegetarian", "NonVegetarian"];

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
        location: ''
     });
  
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
          <select
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>Select Gender</option>
          {GENDER_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <br />
        <input
          type="text"
          name="fitnessGoals"
          placeholder="Fitness Goals"
          value={formData.fitnessGoals}
          onChange={handleInputChange}
          required
        />
        <select
          name="fitnessLevel"
          value={formData.fitnessLevel}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>Select Fitness Level</option>
          {FITNESS_LEVEL_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <br />
        <input
          type="number"
          name="height"
          placeholder="Height (in cm)"
          value={formData.height}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight (in kg)"
          value={formData.weight}
          onChange={handleInputChange}
          required
        />
        <select
          name="dietaryPreferences"
          value={formData.dietaryPreferences}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>Select Dietary Preference</option>
          {DIETARY_PREFERENCE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        br
        <input
          type="text"
          name="preferredWorkoutTypes"
          placeholder="Preferred Workout Types"
          value={formData.preferredWorkoutTypes}
          onChange={handleInputChange}
        />
        <select
          name="dailyActivityLevel"
          value={formData.dailyActivityLevel}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>Select Daily Activity Level</option>
          {ACTIVITY_LEVEL_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <br />
        <input
          type="text"
          name="languagesSpoken"
          placeholder="Languages Spoken"
          value={formData.languagesSpoken}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleInputChange}
        />

        <button type="submit">Register</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
      </form>
    </div>
  );
};

export default ClientRegister;

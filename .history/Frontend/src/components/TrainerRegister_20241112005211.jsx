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
      const response = await axios.post('http://localhost:5000/api//register', formData);
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
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="certifications"
          placeholder="Certifications (comma-separated)"
          value={formData.certifications}
          onChange={handleInputChange}
        />
        <select
          name="specialization"
          value={formData.specialization}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>Select Specialization</option>
          {SPECIALIZATION_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <textarea
          name="biography"
          placeholder="Biography (max 500 characters)"
          value={formData.biography}
          onChange={handleInputChange}
          maxLength="500"
        />
        <select
          name="availability"
          value={formData.availability}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>Select Availability</option>
          {AVAILABILITY_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="profilePicture"
          placeholder="Profile Picture URL"
          value={formData.profilePicture}
          onChange={handleInputChange}
        />
        <button type="submit">Register</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
      </form>
    </div>
  );
};

export default TrainerRegister;

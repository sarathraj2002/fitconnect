import React, { useState } from 'react';
import axios from 'axios';
import './TrainerRegister.css'; 
import { useNavigate } from 'react-router-dom';

const SPECIALIZATION_OPTIONS = ["Yoga", "Strength Training", "Cardio"];
const AVAILABILITY_OPTIONS = ["Full-time", "Part-time", "Flexible"];

const TrainerRegister = () => {
  const [formData, setFormData] = useState({
    username:'',
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

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle registration
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Prepare form data for backend
      const data = {
        username:formData.username,
        email: formData.email,
        password: formData.password,
        experience: formData.experience,
        certifications: formData.certifications,
        specialization: formData.specialization,
        biography: formData.biography,
        availability: formData.availability,
        profilePicture: formData.profilePicture
      };

      // Post data to backend registration endpoint
      const response = await axios.post('http://localhost:5000/trainer/register', data);
      
      // If successful, show success message and reset form
      setSuccess('Registration successful! Please wait for approval.');
      setError('');
      setFormData({
        username:''
        email: '',
        password: '',
        experience: '',
        certifications: '',
        specialization: '',
        biography: '',
        availability: '',
        profilePicture: ''
      });

      // Redirect after a delay
      setTimeout(() => {
        navigate('/trainer');
      }, 1000);
    } catch (err) {
      // Handle error and show error message
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
        <br />
        <textarea
          name="biography"
          placeholder="Biography (max 500 characters)"
          value={formData.biography}
          onChange={handleInputChange}
          maxLength="500"
        />
        <br />
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
        <br />
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

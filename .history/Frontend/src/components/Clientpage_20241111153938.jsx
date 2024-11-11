import React, { useState } from 'react';
import axios from 'axios';
import './ClientPage.css';

const ClientPage = () => {
  // State for login and registration form
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerForm, setRegisterForm] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    gender: '',
    fitnessGoals: '',
    fitnessLevel: 'Beginner',
    height: '',
    weight: '',
    dietaryPreferences: 'veg',
    preferredWorkoutTypes: [],
    dailyActivityLevel: 'Sedentary',
    languagesSpoken: [],
    location: ''
  });
  
  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [trainers, setTrainers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');

  // Handle client login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/client/login', { 
        email: loginEmail, 
        password: loginPassword 
      });
      setToken(response.data.token);
      setIsLoggedIn(true);
      alert('Login successful!');
    } catch (err) {
      setLoginError(err.response?.data?.message || 'Error logging in');
    }
  };

  // Handle client registration
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/client/register', { 
        ...registerForm 
      });
      alert('Registered successfully!');
    } catch (err) {
      setRegisterError(err.response?.data?.message || 'Error registering');
    }
  };

  // Handle input change for registration form
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle multiple input fields like preferredWorkoutTypes and languagesSpoken
  const handleMultiSelectChange = (e, fieldName) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    setRegisterForm(prevState => ({
      ...prevState,
      [fieldName]: value
    }));
  };

  // Fetch trainers
  const fetchTrainers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/trainers');
      setTrainers(response.data);
    } catch (err) {
      alert('Error fetching trainers');
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <>
          <div className="main">
            <div className="login">
              <h2>Client Login</h2>
              <form onSubmit={handleLogin}>
                <input 
                  type="email" 
                  placeholder="Email" 
                  value={loginEmail} 
                  onChange={(e) => setLoginEmail(e.target.value)} 
                  required
                />
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={loginPassword} 
                  onChange={(e) => setLoginPassword(e.target.value)} 
                  required
                />
                <button type="submit">Login</button>
                {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
              </form>
            </div>

            <div className="signup">
              <h2>Client Registration</h2>
              <form onSubmit={handleRegister}>
                <input 
                  type="text" 
                  name="username"
                  placeholder="Username" 
                  value={registerForm.username} 
                  onChange={handleRegisterChange}
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  value={registerForm.email} 
                  onChange={handleRegisterChange} 
                  required
                />
                <input 
                  type="password" 
                  name="password"
                  placeholder="Password" 
                  value={registerForm.password} 
                  onChange={handleRegisterChange} 
                  required
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number" 
                  value={registerForm.phone} 
                  onChange={handleRegisterChange}
                />
                <select 
                  name="gender" 
                  value={registerForm.gender} 
                  onChange={handleRegisterChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <input 
                  type="text" 
                  name="fitnessGoals" 
                  placeholder="Fitness Goals" 
                  value={registerForm.fitnessGoals} 
                  onChange={handleRegisterChange}
                />
                <select 
                  name="fitnessLevel" 
                  value={registerForm.fitnessLevel} 
                  onChange={handleRegisterChange}
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
                <input 
                  type="number" 
                  name="height" 
                  placeholder="Height (cm)" 
                  value={registerForm.height} 
                  onChange={handleRegisterChange}
                />
                <input 
                  type="number" 
                  name="weight" 
                  placeholder="Weight (kg)" 
                  value={registerForm.weight} 
                  onChange={handleRegisterChange}
                />
                <select 
                  name="dietaryPreferences" 
                  value={registerForm.dietaryPreferences} 
                  onChange={handleRegisterChange}
                >
                  <option value="veg">Vegetarian</option>
                  <option value="nonveg">Non-Vegetarian</option>
                </select>
                <select 
                  multiple 
                  name="preferredWorkoutTypes" 
                  value={registerForm.preferredWorkoutTypes} 
                  onChange={(e) => handleMultiSelectChange(e, 'preferredWorkoutTypes')}
                >
                  <option value="Cardio">Cardio</option>
                  <option value="Strength Training">Strength Training</option>
                  <option value="Yoga">Yoga</option>
                </select>
                <select 
                  name="dailyActivityLevel" 
                  value={registerForm.dailyActivityLevel} 
                  onChange={handleRegisterChange}
                >
                  <option value="Sedentary">Sedentary</option>
                  <option value="Moderately active">Moderately active</option>
                  <option value="Highly active">Highly active</option>
                </select>
                <input 
                  type="text" 
                  name="languagesSpoken"
                  placeholder="Languages Spoken (comma separated)" 
                  value={registerForm.languagesSpoken} 
                  onChange={handleRegisterChange}
                />
                <input 
                  type="text" 
                  name="location" 
                  placeholder="Location" 
                  value={registerForm.location} 
                  onChange={handleRegisterChange}
                />
                <button type="submit">Register</button>
                {registerError && <p style={{ color: 'red' }}>{registerError}</p>}
              </form>
            </div>
          </div> 
        </>
      ) : (
        <>
          <h2>Welcome!</h2>
          <button onClick={fetchTrainers}>Fetch Trainers</button>
          {trainers.length > 0 && (
            <div>
              <h3>Available Trainers</h3>
              <ul>
                {trainers.map((trainer) => (
                  <li key={trainer._id}>
                    {trainer.name} - {trainer.specialization}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ClientPage;

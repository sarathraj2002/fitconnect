// import React, { useState } from 'react';
// import axios from 'axios';

// const ClientPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/client/login', { email, password });
//       alert('Logged in successfully!');
//     } catch (err) {
//       alert('Error logging in');
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/client/register', { email, password });
//       alert('Registered successfully!');
//     } catch (err) {
//       alert('Error registering');
//     }
//   };

//   return (
//     <div>
//       <h2>Client Login</h2>
//       <form onSubmit={handleLogin}>
//         <input 
//           type="email" 
//           placeholder="Email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//         />
//         <input 
//           type="password" 
//           placeholder="Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//         />
//         <button type="submit">Login</button>
//       </form>

//       <h2>Client Registration</h2>
//       <form onSubmit={handleRegister}>
//         <input 
//           type="email" 
//           placeholder="Email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//         />
//         <input 
//           type="password" 
//           placeholder="Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default ClientPage;


import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'react-router-dom';

const ClientPage = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/client/login', { 
        email: '', 
        password: ''
      });
      alert('Logged in successfully!');
      // Optionally, handle the token or redirect here
    } catch (err) {
      setLoginError(err.response?.data?.message || 'Error logging in');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/client/register', { 
        email: '', 
        password: ''
      });
      alert('Registered successfully!');
    } catch (err) {
      setRegisterError(err.response?.data?.message || 'Error registering');
    }
  };

  return (
    <div>
      <h2>Client Login</h2>
      <Form onSubmit={handleLogin}>
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

      <h2>Client Registration</h2>
      <form onSubmit={handleRegister}>
        <input 
          type="email" 
          placeholder="Email" 
          value={registerEmail} 
          onChange={(e) => setRegisterEmail(e.target.value)} 
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={registerPassword} 
          onChange={(e) => setRegisterPassword(e.target.value)} 
          required
        />
        <button type="submit">Register</button>
        {registerError && <p style={{ color: 'red' }}>{registerError}</p>}
      </form>
    </div>
  );
};

export default ClientPage;

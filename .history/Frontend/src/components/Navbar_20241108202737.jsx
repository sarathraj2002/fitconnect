import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { assets } from '../assets/assets';
const Navbar = () => {
  return (
     <nav className="navbar">
    {/* Logo */}
    <div className="navbar-logo">
      <img src={assets.logo} alt="Logo" />
    </div> 
    <div className='head'>
      FitConnect
    </div>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/client">Client</Link></li>
        <li><Link to="/trainer">Trainer</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

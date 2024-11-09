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
    <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
      
        <Link to="/">Home</Link>
        <Link to="/client">Client</Link>
        <Link to="/trainer">Trainer</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/trainerlist">TrainerList</Link>  
        <Link to="/about">About Us</Link>
      
    </nav>
  );
};

export default Navbar;

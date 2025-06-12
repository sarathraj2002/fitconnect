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
     <style= ><b> FITCONNECT</b></style>
    </div>

      
        <Link to="/" style={{textDecoration:'none',color:'white'}}>Home</Link>
        <Link to="/client" style={{textDecoration:'none',color:'white'}}>Client</Link>
        <Link to="/trainer" style={{textDecoration:'none',color:'white'}}>Trainer</Link>
        <Link to="/admin" style={{textDecoration:'none',color:'white'}}>Admin</Link>
        <Link to="/trainerlist" style={{textDecoration:'none',color:'white'}}>TrainerList</Link>  
        <Link to="/about" style={{textDecoration:'none',color:'white'}}>About Us</Link>
      
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
const NavBar = () => {
  return (
    <nav >
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

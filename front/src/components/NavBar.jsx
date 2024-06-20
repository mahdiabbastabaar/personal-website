import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Profile</Link></li>
        <li><Link to="/album">Album</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

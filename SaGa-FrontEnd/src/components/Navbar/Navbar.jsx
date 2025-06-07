import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserPlus, FaSignInAlt, FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="navbar-logo">
        <h2>SaGa</h2>
      </div>
      <div className="hamburger" onClick={toggleNavbar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search..." 
            className={`search-input ${isSearchVisible ? 'active' : ''}`}
          />
          <button className="search-button" onClick={toggleSearch}>
            <FaSearch />
          </button>
        </div>
        <Link to="/signup" onClick={toggleNavbar}>Signup</Link>
        <Link to="/login" onClick={toggleNavbar}>Login</Link>
        <Link to="/cart" onClick={toggleNavbar}>Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;

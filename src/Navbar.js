import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';
import SearchForm from './SearchForm';
import NavbarLinks from './NavbarLinks';
import MenuLinks from './MenuLinks';
import './Navbar.css';

function Navbar({ onSearchChange, setCartItems }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    onSearchChange(newSearchTerm);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setCartItems([]); // Clear the cart items
    navigate('/');
  };

  return (
    <div className="app__navbar">
      <FaPizzaSlice className="icon" size={32} />
      <Link to="/">
        <h1 className="app__navbar-text">
          Yumi<span>to</span>
        </h1>
      </Link>
      <SearchForm
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
      <NavbarLinks isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <MenuLinks />
    </div>
  );
}

export default Navbar;




import React, { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import FoodCardsContainer from './FoodCardsContainer';
import Login from './Login';
import Cart from './Cart';

function App() {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === '/login';

  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  const handleAddToCart = (item) => {
    const token = localStorage.getItem('token');
    if (token) {
      setCartItems((prevItems) => [...prevItems, item]);
      toast.success(`${item.name} added to cart`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
    } else {
      navigate('/login');
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
    toast.info('Cart cleared');
  };

  const handleLogin = () => {
    navigate('/cart');
  };

  return (
    <div className="App">
      {!hideNavbarFooter && <Navbar onSearchChange={handleSearchChange} setCartItems={setCartItems} />}
      <Routes>
        <Route
          path="/"
          element={<FoodCardsContainer searchTerm={searchTerm} onAddToCart={handleAddToCart} />}
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} onClearCart={handleClearCart} />} />
        <Route
          path="/:category"
          element={<FoodCardsContainer searchTerm={searchTerm} onAddToCart={handleAddToCart} />}
        />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

export default App;




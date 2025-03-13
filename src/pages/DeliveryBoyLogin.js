// src/pages/DeliveryBoyLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';


function DeliveryBoyLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your backend API call here
    console.log('Delivery Boy Login:', { email, password });
    navigate('/delivery-slots'); // Redirect on successful login
  };

  return (
    <div className="home-wrapper">
      {/* Header component */}
      <Header />

      {/* Main Content */}
      <div className="home-container">
        <h2>Delivery Boy Login</h2>

        <div className="image-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2203/2203124.png"
            alt="Delivery Boy"
            className="avatar"
          />
        </div>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
          <button type="submit" className="role-button delivery">
            Login
          </button>
        </form>
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default DeliveryBoyLogin;

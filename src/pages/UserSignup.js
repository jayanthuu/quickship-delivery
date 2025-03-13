// src/pages/UserSignup.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

function UserSignup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle signup submission
  const handleSignup = (e) => {
    e.preventDefault();
    // Add your backend API call here
    console.log('User Signup:', { name, email, password });
    navigate('/user-login'); // Redirect on successful signup
  };

  // Function to navigate to Home
  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="home-wrapper">
      {/* Header component */}
      <Header />

      {/* Main Content */}
      <div className="home-container">
        <h2>Recipient Signup</h2>

        {/* Home Button */}
        <button className="home-button" onClick={goToHome}>
          Home
        </button>

        {/* User Avatar Image */}
        <div className="image-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="User"
            className="avatar"
          />
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Enter Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input-field"
          />
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
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
          <button type="submit" className="role-button recipient">
            Signup
          </button>
        </form>
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default UserSignup;

// src/pages/UserLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

function UserLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    // Add your backend API call here
    console.log('User Login:', { email, password });
    navigate('/user-product'); // Redirect on successful login
  };

  // Navigate to Home
  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="home-wrapper">
      {/* Header component */}
      <Header />

      {/* Main Content */}
      <div className="home-container">
        <h2>Recipient Login</h2>

        {/* Home Button */}
        <button className="home-button" onClick={goToHome}>
          Home
        </button>

        {/* Avatar Image */}
        <div className="image-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="User"
            className="avatar"
          />
        </div>

        {/* Login Form */}
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
          <button type="submit" className="role-button recipient">
            Login
          </button>
        </form>

        {/* Signup Redirect */}
        <p style={{ marginTop: '20px' }}>
          Don't have an account?{' '}
          <span
            style={{
              color: '#1e88e5',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
            onClick={() => navigate('/user-signup')}
          >
            Sign up here
          </span>
        </p>
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default UserLogin;

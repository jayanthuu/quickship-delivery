// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      {/* Header component */}
      <Header />

      {/* Main Content */}
      <div className="home-container">
        <h2>Welcome to Quick Ship</h2>

        <div className="image-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2203/2203124.png"
            alt="Delivery Boy"
            className="avatar"
          />
          <button
            className="role-button delivery"
            onClick={() => navigate('/delivery-boy-login')}
          >
            I'm a Delivery Boy
          </button>
        </div>

        <div className="image-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="User"
            className="avatar"
          />
          <button
            className="role-button recipient"
            onClick={() => navigate('/user-signup')} 
          >
            I'm a Recipient
          </button>
        </div>
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default Home;

// src/pages/PaymentSuccess.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <Header />
      <div className="home-container">
        <h2>Payment Successful!</h2>
        <p>Your order has been placed successfully. Thank you for shopping with us!</p>

        {/* Buttons */}
        <div className="button-group">
          <button onClick={() => navigate('/')} className="home-button">
            Home
          </button>
          <button onClick={() => navigate('/user-product')} className="role-button recipient">
            Back to Products
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PaymentSuccess;

// src/pages/UserPayment.js

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

function UserPayment() {
  const { productName, timeSlot, paymentMethod } = useParams();
  const navigate = useNavigate();

  // Payment handler
  const handlePayment = () => {
    alert(`Payment for ${productName} via ${paymentMethod} is successful!`);
    navigate('/payment-success'); // Redirect to payment success page
  };

  // Function to navigate to Home
  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="home-wrapper">
      {/* Header component */}
      <Header />

      {/* Payment card container */}
      <div className="payment-card">
        <h2 className="payment-title">Confirm Your Payment</h2>

        {/* Home Button */}
        <button className="home-button" onClick={goToHome}>
          Home
        </button>

        {/* Payment Details */}
        <div className="payment-details">
          <p><strong>Product:</strong> {productName}</p>
          <p><strong>Delivery Slot:</strong> {timeSlot}</p>
          <p><strong>Payment Method:</strong> {paymentMethod}</p>
        </div>

        {/* Payment & Change Method Buttons */}
        <button onClick={handlePayment} className="primary-button">
          Pay Now
        </button>

        <button onClick={() => navigate(-1)} className="secondary-button">
          Change Payment Method
        </button>
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default UserPayment;

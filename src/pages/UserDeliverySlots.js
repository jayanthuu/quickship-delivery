// src/pages/UserDeliverySlot.js
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

function UserDeliverySlot() {
  const { productName } = useParams(); // Get product name from URL params
  const navigate = useNavigate();

  // State for time slot and payment method
  const [timeSlot, setTimeSlot] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  // Handle form submission for confirming delivery and payment method
  const handleConfirm = () => {
    if (timeSlot && paymentMethod) {
      navigate(`/payment/${productName}/${timeSlot}/${paymentMethod}`); // Navigate to payment page with selections
    } else {
      alert('Please select both time slot and payment method.');
    }
  };

  // Navigate to Home Page
  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="home-wrapper">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="home-container">
        <h2>Choose Delivery Slot for {productName}</h2>

        {/* Home Button */}
        <button className="home-button" onClick={goToHome}>
          Home
        </button>

        {/* Delivery Slot Selection */}
        <div className="delivery-slot">
          <label><strong>Select Delivery Slot:</strong></label>
          <select
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            className="input-field"
          >
            <option value="">Select</option>
            <option>9 AM - 12 PM</option>
            <option>12 PM - 3 PM</option>
            <option>3 PM - 6 PM</option>
            <option>6 PM - 9 PM</option>
          </select>
        </div>

        {/* Payment Method Selection */}
        <div className="payment-method" style={{ marginTop: '20px' }}>
          <label><strong>Select Payment Method:</strong></label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="input-field"
          >
            <option value="">Select</option>
            <option>Credit/Debit Card</option>
            <option>UPI</option>
            <option>Net Banking</option>
            <option>Cash on Delivery</option>
          </select>
        </div>

        {/* Proceed to Payment Button */}
        <button
          onClick={handleConfirm}
          className="book-button"
          style={{ marginTop: '20px' }}
        >
          Proceed to Payment
        </button>

        {/* Change Time Slot Option */}
        <button
          onClick={() => navigate('/edit-delivery-slot')}
          className="role-button recipient"
          style={{ marginTop: '10px' }}
        >
          Change Time Slot
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default UserDeliverySlot;

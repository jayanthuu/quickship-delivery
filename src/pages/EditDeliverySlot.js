// src/pages/EditDeliverySlot.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

function EditDeliverySlot() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedSlot } = location.state || {};

  const handleChangeSlot = () => {
    // Navigate to the new slot selection page with existing slot (if any)
    navigate('/select-new-slot', { state: { selectedSlot } });
  };

  const handleConfirmSlot = () => {
    // Navigate back to delivery slot page to proceed with booking
    navigate('/user-delivery-slots', { state: { selectedSlot } });
  };

  return (
    <div className="home-wrapper">
      {/* Header */}
      <Header />

      {/* Main Container */}
      <div className="home-container">
        <h2>Confirm or Edit Delivery Slot</h2>

        <p>
          Selected Time Slot:&nbsp;
          <strong>{selectedSlot || 'No slot selected yet'}</strong>
        </p>

        {/* Buttons Group */}
        <div className="button-group">
          <button className="role-button recipient" onClick={handleConfirmSlot}>
            Confirm Slot
          </button>
          <button className="change-button" onClick={handleChangeSlot}>
            Change Slot
          </button>
          <button className="home-button" onClick={() => navigate('/')}>
            Home
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default EditDeliverySlot;

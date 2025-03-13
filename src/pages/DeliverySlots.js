// src/pages/DeliverySlots.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

function DeliverySlots() {
  const [selectedSlot, setSelectedSlot] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const deliverySlots = [
    '9:00 AM - 11:00 AM',
    '11:00 AM - 1:00 PM',
    '1:00 PM - 3:00 PM',
    '3:00 PM - 5:00 PM',
    '5:00 PM - 7:00 PM',
  ];

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
    console.log('Selected Slot:', slot);
    // Optional: Show alert or notification
    alert(`You have selected: ${slot}`);
    // Navigate to DeliveryDetails page
    navigate('/delivery-details', { state: { slot } }); // Pass slot as state if needed in next page
  };

  return (
    <div className="home-wrapper">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="home-container">
        <h2>Select Your Delivery Slot</h2>

        <div className="slots-container">
          {deliverySlots.map((slot, index) => (
            <button
              key={index}
              className={`slot-button ${
                selectedSlot === slot ? 'slot-selected' : ''
              }`}
              onClick={() => handleSlotSelection(slot)}
            >
              {slot}
            </button>
          ))}
        </div>

        {/* Home Button */}
        <div className="button-group">
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

export default DeliverySlots;

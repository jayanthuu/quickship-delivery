import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

function SelectNewSlot() {
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState('');

  // Handle slot submission
  const handleSubmit = () => {
    if (selectedSlot) {
      // Navigate back to UserDeliverySlot and pass selected slot
      navigate('/user-delivery-slots', { state: { selectedSlot } });
    } else {
      alert('Please select a delivery slot before submitting.');
    }
  };

  // Handle Home Navigation
  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="home-wrapper">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="home-container">
        <h2>Select New Delivery Slot</h2>

        {/* Home Button */}
        <button className="home-button" onClick={goToHome}>
          Home
        </button>

        {/* Slot Options */}
        <div className="slot-options">
          {['9 AM - 12 PM', '12 PM - 3 PM', '3 PM - 6 PM', '6 PM - 9 PM'].map((slot) => (
            <button
              key={slot}
              className={`slot-button ${selectedSlot === slot ? 'active' : ''}`}
              onClick={() => setSelectedSlot(slot)}
            >
              {slot}
            </button>
          ))}
        </div>

        {/* Submit Button */}
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default SelectNewSlot;

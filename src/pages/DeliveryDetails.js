// src/pages/DeliveryDetails.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

function DeliveryDetails() {
  // Placeholder for delivery details
  const deliveryDetails = {
    id: '12345',
    name: 'John Doe',
    phone: '+91-9876543210',
    address: '123 Main St, City, State, Country',
    deliveryTime: '10:00 AM - 11:00 AM',
  };

  return (
    <div className="home-wrapper">
      {/* Header component */}
      <Header />

      {/* Main Content */}
      <div className="home-container">
        <h2>Delivery Details</h2>

        <div className="delivery-details">
          <p><strong>ID:</strong> {deliveryDetails.id}</p>
          <p><strong>Name:</strong> {deliveryDetails.name}</p>
          <p><strong>Phone:</strong> {deliveryDetails.phone}</p>
          <p><strong>Address:</strong> {deliveryDetails.address}</p>
          <p><strong>Delivery Time:</strong> {deliveryDetails.deliveryTime}</p>
        </div>
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default DeliveryDetails;

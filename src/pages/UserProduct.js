import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

// Import local images
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.avif';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';

function UserProduct() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Product list
  const [products] = useState([
    { id: 1, name: 'Fresh Vegetables', description: 'Organic and locally sourced vegetables.', price: '₹250', image: img1 },
    { id: 2, name: 'Fruit Basket', description: 'A basket full of seasonal fruits.', price: '₹300', image: img2 },
    { id: 3, name: 'Dairy Products', description: 'Fresh milk, cheese, and butter.', price: '₹400', image: img3 },
    { id: 4, name: 'Bakery Items', description: 'Freshly baked bread, cakes, and pastries.', price: '₹350', image: img4 },
    { id: 5, name: 'Household Essentials', description: 'Daily household essential products.', price: '₹600', image: img5 },
    { id: 6, name: 'Packaged Snacks', description: 'Chips, biscuits, and other snacks.', price: '₹200', image: img6 },
    { id: 7, name: 'Frozen Foods', description: 'Frozen ready-to-eat meals and veggies.', price: '₹500', image: img7 },
    { id: 8, name: 'Personal Care', description: 'Soaps, shampoos, and skincare products.', price: '₹450', image: img8 },
    { id: 9, name: 'Beverages', description: 'Juices, soft drinks, and mineral water.', price: '₹350', image: img9 },
    { id: 10, name: 'Spices and Masala', description: 'Authentic spices and masalas for cooking.', price: '₹150', image: img10 }
  ]);

  // Refs for each product
  const productRefs = useRef({});

  // Handle booking
  const handleBook = () => {
    navigate('/user-delivery-slots');
  };

  // Home button
  const goToHome = () => {
    navigate('/');
  };

  // Search handler
  const handleSearch = () => {
    const foundProduct = products.find(
      (product) => product.name.toLowerCase() === searchQuery.toLowerCase()
    );
    if (foundProduct && productRefs.current[foundProduct.id]) {
      productRefs.current[foundProduct.id].scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      alert('Product not found!');
    }
  };

  return (
    <div className="home-wrapper">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="home-container">
        <h2>Available Products</h2>

        {/* Home Button */}
        <button className="home-button" onClick={goToHome}>
          Home
        </button>

        {/* Search Bar */}
        <div style={{ margin: '20px 0', textAlign: 'center' }}>
          <input
            type="text"
            placeholder="Search product by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ padding: '10px', width: '60%', borderRadius: '5px', border: '1px solid gray' }}
          />
          <button
            onClick={handleSearch}
            style={{ padding: '10px 20px', marginLeft: '10px', borderRadius: '5px', backgroundColor: '#28a745', color: 'white', border: 'none' }}
          >
            Search
          </button>
        </div>

        {/* Product List */}
        <div className="product-list">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              ref={(el) => (productRefs.current[product.id] = el)} // Store ref for each product
            >
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="product-price">{product.price}</p>
              <button className="book-button" onClick={handleBook}>
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* Manage Delivery Slot Button */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default UserProduct;

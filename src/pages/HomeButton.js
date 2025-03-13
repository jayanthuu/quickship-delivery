import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Add styling if needed

function HomeButton() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <button onClick={goToHome} className="home-button">
      Home
    </button>
  );
}

export default HomeButton;

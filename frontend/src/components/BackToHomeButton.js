import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackToHomeButton = () => {
  const navigate = useNavigate();

  return (
    <button className="backToHomeButton" onClick={() => navigate('/')}>
      Home
    </button>
  );
};

export default BackToHomeButton;

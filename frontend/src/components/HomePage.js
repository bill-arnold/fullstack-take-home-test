import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import '../styles.css';


const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1>Welcome to Ello bookShelf App 📘💻</h1>
        <p>Explore our collection of books and start your reading journey today!</p>
        <Button variant="contained" component={Link} to="/booklist">
          Explore Books
        </Button>
      </div>
      
    </div>
  );
};

export default HomePage;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import Sidebar from './components/Sidebar';
import BookList from './components/BookList';
import BookSearch from './components/BookSearch';
import ReadingList from './components/ReadingList';
import HomePage from './components/HomePage';
import BackToHomeButton from './components/BackToHomeButton';
import './styles.css';

// Wrap the use of useLocation in a custom component
const LocationAwareButton = () => {
  const location = useLocation(); // Hook to get the current location
  return location.pathname !== '/' && <BackToHomeButton />;
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <LocationAwareButton /> {/* Use the new component here */}
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booklist" element={<BookList />} />
            <Route path="/booksearch" element={<BookSearch />} />
            <Route path="/readinglist" element={<ReadingList />} />
          </Routes>
        </Container>
      </div>
      <footer className="footer">
        © {new Date().getFullYear()} My Bookshelf
      </footer>
    </Router>
  );
};

export default App;

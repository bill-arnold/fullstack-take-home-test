import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Sidebar from './components/Sidebar';
import BookList from './components/BookList';
import BookSearch from './components/BookSearch';
import ReadingList from './components/ReadingList';
import Footer from './components/Footer';
import './styles.css';

const App = () => (
  <Router>
    <CssBaseline />
    <div className="app">
      <h1>Ello's Book Store</h1>
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/search" element={<BookSearch />} />
          <Route path="/reading-list" element={<ReadingList />} />
        </Routes>
      </div>
    </div>
    <Footer />
  </Router>
);

export default App;

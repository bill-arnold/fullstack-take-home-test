import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { TextField, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import '../styles.css';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

const BookSearch = () => {
  const [title, setTitle] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  
  const { loading, error, data } = useQuery(GET_BOOKS);

  const handleSearch = () => {
    if (data) {
      const results = data.books.filter((book) =>
        book.title.toLowerCase().includes(title.toLowerCase())
      );
      setFilteredBooks(results);
    }
  };

  return (
    <div className="book-search">
      <TextField
        label="Search for a book"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        style={{ marginBottom: '20px' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        style={{ marginBottom: '20px' }}
      >
        Search
      </Button>
      <div className="book-grid">
        {filteredBooks.length === 0 && title && <p>No results found.</p>}
        {filteredBooks.map((book) => (
          <Card key={book.title} className="book-item">
            <CardMedia
              component="img"
              height="200"
              image={book.coverPhotoURL}
              alt={book.title}
              className="zoom-effect"
            />
            <CardContent>
              <Typography variant="h6">{book.title}</Typography>
              <Typography variant="subtitle1">Author: {book.author}</Typography>
              <Typography variant="body2">Reading Level: {book.readingLevel}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default BookSearch;

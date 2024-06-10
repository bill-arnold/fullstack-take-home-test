import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import { TextField, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import '../styles.css';

const SEARCH_BOOKS = gql`
  query SearchBooks($title: String!) {
    searchBooks(title: $title) {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

const BookSearch = () => {
  const [title, setTitle] = useState('');
  const [searchBooks, { loading, data }] = useLazyQuery(SEARCH_BOOKS);

  const handleSearch = () => {
    searchBooks({ variables: { title } });
  };

  return (
    <div className="book-search">
      <h2 className="typewriter">Search Books</h2>
      <TextField
        label="Search for a book"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
      {loading && <p>Loading...</p>}
      {data && (
        <div className="book-grid">
          {data.searchBooks.map(book => (
            <Card key={book.title} className="book-item">
              <CardMedia
                component="img"
                height="140"
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
      )}
    </div>
  );
};

export default BookSearch;

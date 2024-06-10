import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
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

const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="book-list">
      <h2 className="typewriter">Book List</h2>
      <div className="book-grid">
        {data.books.map(book => (
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
    </div>
  );
};

export default BookList;

import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Card, CardContent, CardMedia, Typography, Grid, Button } from '@mui/material';
import { useReadingList } from './ReadingListContext';
import ReadingList from './ReadingList';
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
  const { setReadingList } = useReadingList();

  const addToReadingList = (book) => {
    setReadingList((prevList) => {
      const updatedList = [...prevList, book];
      console.log("Updated Reading List:", updatedList);
      return updatedList;
    });
    alert(`"${book.title}" added to your reading list!`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Typography variant="h4" gutterBottom className="typewriter">
        Book List
      </Typography>
      <Grid container spacing={4}>
        {data.books.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.title + '-' + book.author}>
            <Card className="book-item" elevation={3}>
              <CardMedia
                component="img"
                height="140"
                image={book.coverPhotoURL}
                alt={book.title}
                className="zoom-effect"
                onError={(e) => {
                  e.target.src = 'path/to/placeholder-image.jpg'; // Fallback image
                }}
              />
              <CardContent>
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="subtitle1">Author: {book.author}</Typography>
                <Typography variant="body2">Reading Level: {book.readingLevel}</Typography>
              </CardContent>
              <Button size="small" color="primary" onClick={() => addToReadingList(book)}>
                Add to Reading List
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
      <ReadingList />
    </>
  );
};

export default BookList;

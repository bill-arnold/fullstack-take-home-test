import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useReadingList } from './ReadingListContext';
import '../styles.css';

const ReadingList = () => {
  const { readingList, setReadingList } = useReadingList();

  const removeFromReadingList = (indexToRemove) => {
    setReadingList((prevList) => {
      const updatedList = prevList.filter((_, index) => index !== indexToRemove);
      return updatedList;
    });
  };

  return (
    <div className="reading-list">
      <h2>Your Reading List</h2>
      <div className="reading-list-items">
        {readingList.map((book, index) => (
          <div key={index} className="reading-list-item">
            <Card className="book-card">
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
                <Button variant="contained" onClick={() => removeFromReadingList(index)}>Remove from List</Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadingList;

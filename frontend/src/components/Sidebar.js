import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Import the Menu icon
import '../styles.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <IconButton onClick={toggleSidebar} className={`sidebar-toggle ${isOpen ? 'open' : 'closed'}`}>
        <MenuIcon /> {/* Use the Menu icon here */}
      </IconButton>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <List component="nav">
          <ListItem button component={Link} to="/booklist">
            <ListItemText primary="Book List" />
          </ListItem>
          <ListItem button component={Link} to="/booksearch">
            <ListItemText primary="Book Search" />
          </ListItem>
          <ListItem button component={Link} to="/readinglist">
            <ListItemText primary="Reading List" />
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default Sidebar;

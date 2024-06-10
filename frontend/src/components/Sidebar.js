import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Drawer } from '@mui/material';

const Sidebar = () => (
  <Drawer
    variant="permanent"
    anchor="left"
    sx={{
      width: 240,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
    }}
  >
    <List>
      <ListItem button component={Link} to="/">
        <ListItemText primary="Book List" />
      </ListItem>
      <ListItem button component={Link} to="/search">
        <ListItemText primary="Search Books" />
      </ListItem>
      <ListItem button component={Link} to="/reading-list">
        <ListItemText primary="Reading List" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;

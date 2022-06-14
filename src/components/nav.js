import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import {Box, Button, Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';



const navItems = ['Dojo', 'Classes', 'About', 'Contact'];

function Nav(props) {
  const place = window.location.href
  console.log(place.slice(21, place.length))

  
  return (
    <Box sx={{  display: 'flex' }}>
      <AppBar component="nav" sx={{ backgroundColor: 'black'}}>
        <Toolbar>
          <Box
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, border: '1px solid red', width: 1/4 }}
          >
          <img src="../logos/logowithflame.jpg" alt="kindojo logo"/>
          </Box>
          <Box sx={{ border: '1px solid green'}}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;


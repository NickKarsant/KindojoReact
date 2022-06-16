import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {Box, Link, Stack} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import logo from '../logos/logowithflame.jpg'
import NavLink from './NavLink'




const navItems = [{name: 'Dojo', href:'/'}, {name:'Classes', href:'/classes'}, {name:'About', href:'/about'}, {name:'Contact', href:'/contact'}];

function Nav(props) {
  const current = window.location.href.slice(21, window.location.href.length)
  console.log(current)

const nav = navItems.map((item)=> <NavLink current={current} key={item.name} name={item.name} href={item.href}/>)
 

  
  return (
    <Box sx={{  display: 'flex' }}>
      <AppBar component="nav" sx={{ backgroundColor: 'black'}}>
        <Toolbar>
          <Box
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, width: 1/4 }}
          >
          <img src={logo} style={{maxWidth: '250px', width: 'auto', height:'auto'}} alt="kindojo logo"/>
          </Box>
          <Box sx={{width: 2/5}}>
            <Stack direction='row' spacing={5}>
              {nav}
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;


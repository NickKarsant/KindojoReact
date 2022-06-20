import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {Box, Grid, Link, Stack} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import logo from '../logos/logowithflame.jpg'
import NavLink from './NavLink'




const navItems = [{name:'Classes', href:'/classes'}, {name:'About', href:'/about'}, {name:'Contact', href:'/contact'}];

function Nav(props) {
  const current = window.location.href.slice(21, window.location.href.length)

const nav = navItems.map((item)=> <NavLink current={current} key={item.name} name={item.name} href={item.href}/>)
 

  
  return (
      <AppBar component="nav" position='sticky' sx={{ backgroundColor: 'black'}}>
        <Toolbar>
          <Box
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, width: 1/4 }}
          >
          <Link href='/'>
            <img src={logo} style={{mr: 1, maxWidth: '250px', width: 'auto', height:'auto'}} alt="kindojo logo"/>
          </Link>
          </Box>
          <Grid sx={{width: 'auto', m: 'auto'}}>
              {nav}
          </Grid>
        </Toolbar>
      </AppBar>
  );
}

export default Nav;


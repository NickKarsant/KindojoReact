import React from 'react';
import AppBar from '@mui/material/AppBar';
import {Box, Link, Stack} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import logo from '../logos/logowithflame.jpg'
import NavLink from './NavLink'
import { fallDown as Menu } from 'react-burger-menu'
import useWindowSize from './useWindowSize';


var mobileStyles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '36px',
    height: '30px',
    left: 'initial',
    right: '36px',
    top: '26px',
    zIndex: '20',
  },
  bmBurgerBars: {
    background: 'rgb(4, 215, 159)'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '250px',
    width: '250px',
  },
  bmMenu: {
    background: '#373a47',
    padding: '1em',
    margin: '0 0.5em',
    fontSize: '1.15em',
    height: '320px'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    height:'125px'
  },
  bmItem: {
    display: 'inline-block'
  },

  
  bmOverlay: {
    position:'absolute',
    width:'95vw',
    height: '100vh',
    left: '0px',
    top: '0px',
    zIndex:'10',
    background: 'rgba(0, 0, 0, 0.6)'
  }
}


const mobileNavItems = [{name:'Home', href:'/'},{name:'Classes', href:'/classes'}, {name:'About', href:'/about'}, {name:'Contact', href:'/contact'}];

const webNavItems = [{name:'Classes', href:'/classes'}, {name:'About', href:'/about'}, {name:'Contact', href:'/contact'}];



function Nav(props) {
  const current = window.location.href.slice(21, window.location.href.length)
  const [width] = useWindowSize();

  const mobileNav = mobileNavItems.map((item) => <NavLink current={current} key={item.name} sx={{width:'100%'}} name={item.name} href={item.href}/>)

  const webNav = webNavItems.map((item) => <NavLink current={current} key={item.name} sx={{width:'100%'}} name={item.name} href={item.href}/>)

  const hamburger = width < 720 ? ( 
    <Menu 
    styles={mobileStyles} 
    right>
      <Stack style={{display:'flex'}} spacing={5} direction='column'>
      {mobileNav}
      </Stack>
    </Menu>) : ('');


  
    
    return (
        <AppBar component="nav" 
        position='sticky' 
        sx={{ backgroundColor: 'black', px: 0}}
        > 
          <Toolbar sx={{px:0}}>
            <Box
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, width: 1/4 }}
              >
              <Link href='/'>
                <img src={logo} style={{mr: 1, maxWidth: '250px', width: 'auto', height:'auto'}} alt="kindojo logo"/>
              </Link>
            </Box>
            {hamburger}
            {width > 720 && webNav}
          </Toolbar>
        </AppBar>
    );
  }
  
  export default Nav;


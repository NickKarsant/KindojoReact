import React from 'react'
import {Link} from '@mui/material';
import { makeStyles } from '@mui/styles';






function NavLink({name, href, current}) {



const custom =  makeStyles((theme) => ({
    hover: {
     
      borderRadius: "var(--borderRadius)",
      "&:hover": {
        transition: 'all 0.3s ease-in-out',
        textDecorationColor:'rgb(4, 215, 159)'
      }
    },
  }))

    
    // .test::before{
    //       content: "";
    //       position: absolute;
    //       width: 0;
    //       height: 2px;
    //       bottom: 0;
    //       left: 0;
    //       background-color: green;
    //       visibility: "hidden";
    //       transition: all 0.3s ease-in-out;
        
    // }
  
  

  return (
    <Link 
    underline={current === href ? 'always' : 'hover'} 
    style={custom.hover}
    // style={{textDecorationColor: 'rgb(4, 215, 159)', transitionDuration: '0.3s ease-in-out'}} 
    sx={{fontSize:'2em',color: 'white' }} 
    href={href}>{name}
    </Link>
  )
}

export default NavLink;
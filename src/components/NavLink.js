import React from 'react'
import {Link} from '@mui/material';
import { makeStyles } from '@mui/styles';



const useStyles =  makeStyles((theme) => ({
    hover: {
      "&:hover": {
        color: 'rgb(4, 215, 159)',
      }
    },
  }))

function NavLink({name, href, current}) {

 const custom = useStyles();
  

  return (
    <Link 
      underline={current === href ? 'always' : 'hover'} 
      className={custom.hover}
      md={2}
      sx={{fontSize:'2em',color: 'white', px: 2, textDecorationColor:'rgb(4, 215, 159)' }} 
      href={href}>{name}
    </Link>
  )
}

export default NavLink;
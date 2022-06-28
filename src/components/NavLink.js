import React from 'react'
import {Link} from '@mui/material';


const NavLink = ({name, href, current})  => {


  return (
    <Link 
      underline={current === href ? 'always' : 'hover'} 
      md={2}
      sx={{fontSize:'1.5em',color: 'white', px: 2, textDecorationColor:'rgb(4, 215, 159)' }} 
      href={href}>{name}
    </Link>
  )
}

export default NavLink;
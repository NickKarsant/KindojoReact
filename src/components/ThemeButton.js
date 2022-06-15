import * as React from 'react';
import {Button} from '@mui/material';



function ThemeButton({text, action}) {

  // TODO onClick

  return (
    <Button sx={{backgroundColor:'rgb(4, 215, 159)', fontColor:'black', px: 4, color:'black'}} >
      {text}
    </Button>
  );
}

export default ThemeButton;




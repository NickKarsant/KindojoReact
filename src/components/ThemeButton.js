import React from "react";
import {Button} from "@mui/material";


function ThemeButton({text,onClick, target='_blank', link, sx}){
  return (
    <Button href={link} onClick={onClick}  sx={{...sx, 
    ":hover": {
      backgroundColor: 'lightblue',
    },
      backgroundColor:'rgb(4, 215, 159)', 
      color: 'black',
      padding: '4px 16px 4px 16px', 
      borderRadius: '4px',
      }} rel='noreferrer' target={target}>
      {text}
    </Button>
  );
}

export default ThemeButton;

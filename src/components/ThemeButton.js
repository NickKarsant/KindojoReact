import React from "react";
import {Button} from "@mui/material";


function ThemeButton({text,onClick, target='_blank', link, type, sx}){
  return (
    <Button href={link} onClick={onClick}  sx={{ 
    ":hover": {
      backgroundColor: 'lightblue',
    },
      backgroundColor:'rgb(4, 215, 159)', 
      color: 'black',
      fontSize: '2vw',
      padding: '4px 16px 4px 16px', 
      borderRadius: '4px',...sx
      }} rel='noreferrer' type={type} target={target}>
      {text}
    </Button>
  );
}

export default ThemeButton;

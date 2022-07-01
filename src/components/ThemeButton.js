import React from "react";
import {Button} from "@mui/material";
import useWindowSize from './useWindowSize';




function ThemeButton({text,onClick, target='_blank', link, type, sx}){
  const [width] = useWindowSize();
  return (
    <Button href={link} onClick={onClick}  sx={{ 
    ":hover": {
      backgroundColor: 'lightblue',
    },
      backgroundColor:'rgb(4, 215, 159)', 
      color: 'black',
      fontSize: width < 720 ? '2.5vw' : 'inherit',
      padding:  width < 720 ? '4px 12px 4px 12px' : '4px 16px 4px 16px', 
      borderRadius: '4px',...sx
      }} rel='noreferrer' type={type} target={target}>
      {text}
    </Button>
  );
}

export default ThemeButton;

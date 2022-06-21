import React from "react";
import { makeStyles } from "@mui/styles";
import {Button} from "@mui/material";

const useStyles = makeStyles({
  root: {
    "&.MuiButton-root": {
      backgroundColor:'rgb(4, 215, 159)', 
      color: 'black',
      padding: '4px 16px 4px 16px', 
      borderRadius: '4px',
      '&:hover': {
        backgroundColor: 'lightblue',
      },
    },
  }
});

function ThemeButton({text, link, target ='_blank', action, sx}){
  const classes = useStyles();
  return (
    <Button href={link} target={target} sx={{...sx}} className={classes.root} rel='noreferrer'>
      {text}
    </Button>
  );
}

export default ThemeButton;




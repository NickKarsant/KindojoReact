import * as React from 'react';
import {Box, Card, CardActions, CardMedia, CardContent, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from '../images/Titanic.jpg';
import ThemeButton from './ThemeButton'



const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  /**
   * Max Card with for demo
   * same values used in Material-Ui Card Demos
   */
  card: {
    margin: 0,
    maxWidth: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: "center"
  },

  CardActions: {
    width: '100%', 
    display:'flex', 
    justifyContent:'space-around'
    },
  CardContent: {
    color: "#ffffff",
    display: "flex",
    maxWidth: '600px',
    height: '200px',
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 80,
    margin: 'auto',
    fontSize:'2em',
    position: 'relative',

  },
  CardContentTextSecondary: {
    color: "rgba(255,255,255,0.78)",
    letterSpacing: '.1em',
    wordSpacing: '.1em',
    lineHeight: '1em',
    fontFamily: 'Lato',
    fontSize: '20px'
  }
});

function HeroCard() {

  const classes = useStyles();
  return (
  <Box  sx={{backgroundColor:'black'}}>
    <Card sx={{ position: 'absolute', backgroundImage: `url(${Image})`, display: 'flex', alignContent: 'center', justifyContent: 'center', width: '98.7%', height: '100%', backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'center'}} >
      {/* <CardMedia
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: "100%"
        }}
        media="picture"
        alt="cyr wheel"
        image={Image}
        title="cyr wheel Titanic"
      /> */}
      {/* <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center',position: 'absolute', width: '100%', height: '100%', backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'center'}}>

      </div> */}
      <CardContent className={classes.CardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          Find Your Flow
        </Typography>
        <Typography
          className={classes.CardContentTextSecondary}
          paragraph
          component='p'
        >
          Whether you are veteran of movement arts or at the beginning of your kinesthetic exploration, KinDōjō offers a variety of movement arts classes inspired by martial arts, circus and dance.
        </Typography>
        <CardActions  className={classes.CardActions}>
          <ThemeButton text='FIND CLASSES' size="small" variant="outlined"/>
          <ThemeButton text='BOOK A CLASS' size="small" variant="outlined">
            Learn More
          </ThemeButton>
        </CardActions>
      </CardContent>
    </Card>
    </Box>
  );
}

export default HeroCard;




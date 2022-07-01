import * as React from 'react';
import {Box, Card, CardActions, CardMedia, CardContent, Grid, Typography, Stack } from '@mui/material';
import Image from '../images/Titanic.jpg';
import ThemeButton from './ThemeButton'


function HeroCard() {

  return (
    <Box  sx={{backgroundColor:'black', p: 5, height:'fit-content'}}>
      <Card sx={{display: 'flex',backgroundColor:'black', alignContent: 'center', justifyContent: 'center', width: '100%', height: ''}} >
        <CardMedia
          sx={{
            height:'100vw',
            maxWidth: '900px',
            maxHeight: '95vh',
            width: "100%",
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center'
          }}
          media="picture"
          alt="cyr wheel"
          image={Image}
          title="cyr wheel Titanic"
        >
        <CardContent  sx={{width:'100%'}}>
          <Grid container sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Grid item>
              <Typography gutterBottom variant="h4" color="white" component="h2">
                Find Your Flow
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                paragraph
                color="white"
                component='p'
              >
                Whether you are veteran of movement arts or at the beginning of your kinesthetic exploration, KinDōjō offers a variety of movement arts classes inspired by martial arts, circus and dance.
              </Typography>
            </Grid>
            <CardActions>
            <Stack spacing={3} direction='row'>
              <ThemeButton text='FIND CLASSES' link={'./classes'} target={''} size="small" variant="outlined"/>
              <ThemeButton text='BOOK A CLASS' link={'./booking'} target={''} size="small" variant="outlined"/>
            </Stack>
            </CardActions>
          </Grid>
        </CardContent>


        </CardMedia>
      </Card>
    </Box>
  );
}

export default HeroCard;




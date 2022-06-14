import * as React from 'react';
import {Box, Link, Grid,Typography } from '@mui/material';
import '../images/Titanic.jpg';


function Home() {


  return (
    <Box sx={{border: '1px solid red', marginTop:10, backgroundImage:'../images/Titanic.jpg'}}>

    <Grid  container alignItems='center' justifyContent='center'>
      <Grid item>

        <Typography>
          Find your Flow:
        </Typography> 
        <Typography>
          Whether you are veteran of movement arts or at the beginning of your kinesthetic exploration, KinDōjō offers a variety of movement arts classes inspired by martial arts, circus and dance.
        </Typography> 
      </Grid>
    </Grid>
    
    </Box>
  );
}

export default Home;

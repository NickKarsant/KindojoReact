import * as React from 'react';
import {Box, Grid, Typography} from '@mui/material';
import longExposureImage from '../images/longexposure copy.png'
import ThemeButton from './ThemeButton';


function Mission() {


  return (
    <>

  <Box sx={{backgroundColor:'white', mt: 0, py: 4, width: '100%'}}>
    <Grid container sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>

      <Grid item>
        <Typography component='h4' variant='h4' sx={{borderTop: '3px solid rgb(4, 215, 159)'}}>
          Our Mission
        </Typography>
      </Grid>
      <Grid item sx={{mx: 10}} xs={12}>
        <Typography paragraph>
        The San Francisco Bay Area is home to one of the largest and most talented communities of fire-dancers and flow artists. KinDōjō aims to help expand this community of specialized artists to further include people from all walks of life, and make flow arts a hobby as well-known as any after-school sport.
        </Typography>
        <Typography paragraph>
        By providing private and semi-private classes, KinDōjō ensures that each student receives sufficient attention to their specific needs and learning goals. We aim to promote mental and physical well-being through artistic exploration and physical/technical skills that focus on attunement to one's body and movement by providing a safe, welcoming, yet growth-oriented teaching environment.
        </Typography>
      </Grid>



    </Grid>
  </Box>
  <Box sx={{backgroundColor:'white', mt: 0, py: 4, width: '100%'}}>
    <Grid container sx={{display:'flex', alignItems:'flex-start', justifyContent:'center'}}>
    
        <Grid item xs={5}>
          <Typography component='h5' variant='h5'>
            Donate to the Flow Arts
          </Typography>
          <Typography sx={{my: 5}}>
          Help support a students' learning by donating to KinDōjō. Your donation will be used to purchase practice props of varying sizes to allow people of all ages to participate.
          </Typography>
          <ThemeButton text="Donate" />
        </Grid>

        <Grid item xs={5} sx={{display: 'flex', justifyContent:'center'}}>
          <img alt='long exposure of fire poi spinner' style={{width:'300px', height: '300px'}} src={longExposureImage} />
        </Grid>
  



    </Grid>
  </Box>
    </>
  );
}

export default Mission;




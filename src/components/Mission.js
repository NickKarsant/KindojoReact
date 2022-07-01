import React from 'react';
import {Grid, Typography} from '@mui/material';
import longExposureImage from '../images/longexposure copy.png'
import ThemeButton from './ThemeButton';
import useWindowSize from './useWindowSize';

function Mission() {
 
  const [width] = useWindowSize();
  

  return (
    <>
      <Grid container sx={{display:'flex', mt: 0, py: 4, alignItems:'center', justifyContent:'center'}}>
        <Grid item>
          <Typography component='h4' variant='h4' sx={{mb: 3, borderTop: '3px solid rgb(4, 215, 159)'}}>
            Our Mission
          </Typography>
        </Grid>
        <Grid item sx={{mx: 5}} >
          <Typography paragraph>
          The San Francisco Bay Area is home to one of the largest and most talented communities of fire-dancers and flow artists. KinDōjō aims to help expand this community of specialized artists to further include people from all walks of life, and make flow arts a hobby as well-known as any after-school sport.
          </Typography>
          <Typography paragraph>
          By providing private and semi-private classes, KinDōjō ensures that each student receives sufficient attention to their specific needs and learning goals. We aim to promote mental and physical well-being through artistic exploration and physical/technical skills that focus on attunement to one's body and movement by providing a safe, welcoming, yet growth-oriented teaching environment.
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', backgroundColor:'white', mt: 0, py: 4, width: '100%'}}>

      {width < 720 ? (
        <>
          <Grid item sx={{display: 'flex', py: 2, justifyContent:'center'}}>
            <img alt='long exposure of fire poi spinner' style={{maxWidth:'200px', maxHeight: '200px', width:'auto', height:'auto'}} src={longExposureImage} />
          </Grid>
          <Grid item sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Typography component='h5' variant='h5'>
              Donate to the Flow Arts
            </Typography>
            <Typography sx={{m: 2}}>
            Help support a student's learning by donating to KinDōjō. Your donation will be used to purchase practice props of varying sizes to allow people of all ages to participate.
            </Typography>
            <ThemeButton text="Donate" link='https://www.patreon.com/flowartsdojo' />
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={5}>
            <Typography component='h5' variant='h5'>
              Donate to the Flow Arts
            </Typography>
            <Typography sx={{my: 5}}>
            Help support a students' learning by donating to KinDōjō. Your donation will be used to purchase practice props of varying sizes to allow people of all ages to participate.
            </Typography>
            <ThemeButton text="Donate" link='https://www.patreon.com/flowartsdojo' />
          </Grid>

          <Grid item xs={5} sx={{display: 'flex', justifyContent:'center'}}>
            <img alt='long exposure of fire poi spinner' style={{maxWidth:'300px', maxHeight: '300px', width:'auto', height:'auto'}} src={longExposureImage} />
          </Grid>
        </>
      )}
      </Grid>
    </>
  );
}

export default Mission;




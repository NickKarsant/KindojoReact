import React, {useState} from 'react';
import {Box, Grid, Typography,TextField, Container, Link, Select, InputLabel, MenuItem,   } from '@mui/material';
import ThemeButton from '../ThemeButton'

const light = {color:'white', background:'white'}

const Booking = () => {
  const [lesson, setLesson] = useState('');

  const handleChange = (event) => {
    console.log(event.target.value)
    setLesson(event.target.value);
  };
  
  return (
    <Container>

      <Grid container item sx={{color: 'white', display:'flex', justifyContent: 'center'}}>
        <Typography variant='h2'>
        Book a Class
        </Typography>
      </Grid>
      <Grid container sx={{color: 'white',display:'flex', justifyContent: 'center'}}>
        <Grid item sx={{width:'75%'}}>
          <Typography variant='body'>
            Please fill out the form with your requested class and time slot and an instructor will respond via email to confirm time and location.
          </Typography>
        </Grid>
      </Grid>

      <form>
      <Grid container  direction='column' sx={{display:'flex',my: 2 }}>
        <Grid item>

            <InputLabel sx={{color:'white'}} >Choose a Class</InputLabel>

          <Select
            
            variant='outlined'
            value={lesson}
            sx={{backgroundColor:'white', minWidth: '100px'}}
            onChange={handleChange}
          >
            <MenuItem sx={{color:'black'}} value='bodyFundamentals'>Body Fundamentals</MenuItem>
            <MenuItem sx={{color:'black'}} value='poi'>Poi</MenuItem>
            <MenuItem sx={{color:'black'}} value='ropeDart'>Rope Dart</MenuItem>
            <MenuItem sx={{color:'black'}} value='dragonStaff'>Dragon Staff</MenuItem>
            <MenuItem sx={{color:'black'}} value='contactStaff'>Contact Staff</MenuItem>
            <MenuItem sx={{color:'black'}} value='bullwhip'>Bullwhip</MenuItem>
            <MenuItem sx={{color:'black'}} value='nunchucks'>Nunchucks</MenuItem>
            <MenuItem sx={{color:'black'}} value='firespinning'>Intro to fire spinning</MenuItem>
            <MenuItem sx={{color:'black'}} value='puppyhammer'>Puppyhammer</MenuItem>
          </Select>
        </Grid>

        <Grid item>
          <TextField sx={{width:'50%', backgroundColor: 'white'}} placeholder='Anything you need to ask or mention'  label='Note'></TextField>
        </Grid>

        <Grid item>
          <ThemeButton text='Book a Class'  type='submit'></ThemeButton>
        </Grid>

      </Grid>
      </form>
  

    </Container>
    );
}

export default Booking;




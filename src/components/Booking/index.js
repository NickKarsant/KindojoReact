import React, {useState} from 'react';
import {Box, Grid, Typography,TextField, Container, Link, Select, InputLabel, MenuItem, TextareaAutosize  } from '@mui/material';
import ThemeButton from '../ThemeButton'

import 'react-calendar/dist/Calendar.css';
// import 'react-clock/dist/Clock.css';
import Picker from 'react-datetime-picker' 
import Classes from '../../pages/classes';
import { makeStyles } from "@mui/styles";



const useStyles = makeStyles({
  root: {
    backgroundColor: "white"
  }
});

const Booking = (props) => {
  const classes = useStyles();
  const [lesson, setLesson] = useState('');
  const [numStudents, setNumStudents] = useState(0);
  const [location, setLocation] = useState('');
  const [value, onChange] = useState(new Date());


  const handleChange = (event) => {
    setLesson(event.target.value);
  };
  const handleChangeStudents = (event) => {
    setNumStudents(event.target.value);
  };
  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };
  
  return (
    <Container>

      <Grid container item sx={{color: 'white', display:'flex', justifyContent: 'center'}}>
        <Typography variant='h2'>
        Book a Class
        </Typography>
      </Grid>

      <form>
      <Grid container spacing={2} direction='column' sx={{display:'flex', my: 2 }}>

        {/* NAME */}
        <Grid item>
          <InputLabel sx={{color:'white'}}>Name</InputLabel>
          <TextField variant='outlined' sx={{borderRadius:'4px', backgroundColor:'white'}}></TextField>
        </Grid>
        {/* EMAIL */}
        <Grid item>
          <InputLabel sx={{color:'white'}}>Email</InputLabel>
          <TextField variant='outlined' required sx={{backgroundColor:'white', borderRadius:'4px'}}></TextField>
        </Grid>
        {/* DATE */}
        <Grid item>
          <InputLabel sx={{color:'white'}} >Date and Time</InputLabel>
          <Picker className={classes.root} onChange={onChange} value={value} required  />
        </Grid>
        {/* # STUDENTS */}
        <Grid item>
          <InputLabel sx={{color:'white'}} ># of Students</InputLabel>
          <Select
            variant='outlined'
            value={numStudents}
            sx={{backgroundColor:'white', minWidth: '100px'}}
            onChange={handleChangeStudents}
          >
            <MenuItem sx={{color:'black'}} value='1'>1</MenuItem>
            <MenuItem sx={{color:'black'}} value='2'>2</MenuItem>
            <MenuItem sx={{color:'black'}} value='3'>3</MenuItem>
            <MenuItem sx={{color:'black'}} value='4'>4</MenuItem>
            <MenuItem sx={{color:'black'}} value='5'>5+</MenuItem>
        
          </Select>
        </Grid>

        {/* CLASS */}
        <Grid item>
          <InputLabel sx={{color:'white'}} >Choose a Class</InputLabel>
          <Select
            required
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
            {/* <MenuItem sx={{color:'black'}} value='firespinning'>Intro to fire spinning</MenuItem> */}
            <MenuItem sx={{color:'black'}} value='puppyhammer'>Puppyhammer</MenuItem>
          </Select>
        </Grid>
            <Typography color='white' sx={{width:'50%', pl: 2}} variant='caption'>
            To book the Intro to Fire Spinning class, please contact the instructor
          </Typography>


        {/* LOCATION */}
        <Grid item>
          <InputLabel sx={{color:'white'}} >Select a Location</InputLabel>
          <Select
            required
            variant='outlined'
            value={location}
            sx={{backgroundColor:'white', minWidth: '100px'}}
            onChange={handleChangeLocation}
          >
            <MenuItem sx={{color:'black'}} value='robinWilliamsMeadow'>GGP: Robin Williams Meadow</MenuItem>
            <MenuItem sx={{color:'black'}} value='poloFields'>GGP: Polo Fields</MenuItem>
            <MenuItem sx={{color:'black'}} value='poloFields'>GGP: Other</MenuItem>
            <MenuItem sx={{color:'black'}} value='landsEnd'>Land's End Lookout</MenuItem>
            <MenuItem sx={{color:'black'}} value='Dolores'>Dolores Park</MenuItem>
            <MenuItem sx={{color:'black'}} value='alamoSquare'>Alamo Square Park</MenuItem>
            <MenuItem sx={{color:'black'}} value='Kezar'>Kezar Stadium</MenuItem>
            <MenuItem sx={{color:'black'}} value='other'>Other</MenuItem>
          </Select>
        </Grid>

        
        {/* NOTE */}
        <Grid item>
        <InputLabel sx={{color:'white'}}>Note</InputLabel>
          <TextareaAutosize style={{width: 300}} sx={{backgroundColor: 'white', borderRadius:'4px'}} placeholder="Need to add details or specifics for which this form doesn't account? Add them here." />
        </Grid>

        <Grid item>
          <ThemeButton text='Book a Class' type='submit'/>
        </Grid>

      </Grid>
      </form>
  

    </Container>
    );
}

export default Booking;




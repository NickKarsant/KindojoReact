import React, {useState} from 'react';
import {Button, Card, Grid, FormControl, Typography,TextField, Container, Link, Select, InputLabel, MenuItem, TextareaAutosize  } from '@mui/material';
import ThemeButton from '../ThemeButton'
import Picker from 'react-datetime-picker' 
import { css } from '@emotion/react';




// const useStyles = makeStyles({
//   root: {
//     backgroundColor: "white",
//     height:'35px',
//     fontSize:'18px'
//   },

// });

const Booking = (props) => {
  const [lesson, setLesson] = useState('');
  const [numStudents, setNumStudents] = useState(0);
  const [location, setLocation] = useState('');
  const [value, onChange] = useState(new Date());
  const [messageText, setMessageText] = useState('')

  const handleMessageChange = (event) => {
    setMessageText(event.target.value);
  };

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
      <Card sx={{p: 2,backgroundColor:'rgb(233, 248, 244)'}}>
        <Grid container sx={{display:'flex'}}>
       

        <Grid container sx={{display:'flex', justifyContent:'space-between'}}>
            {/* NAME */}
            <Grid item sm={6} xs={12} sx={{py:1}}>
              <InputLabel >Name</InputLabel>
              <FormControl sx={{width:'60%'}}>
                <TextField variant='outlined' sx={{borderRadius:'4px', backgroundColor:'white'}}/>
              </FormControl>

            </Grid>


            {/* # STUDENTS */}
            <Grid item sm={6} xs={12} sx={{alignItems:'flex-start'}}>

              <InputLabel  ># of Students</InputLabel>
                <FormControl sx={{backgroundColor:'white', width: '60%'}}>
                  <Select
                    variant='outlined'
                    value={numStudents}
                    // sx={{backgroundColor:'white', minWidth: '100px'}}
                    onChange={handleChangeStudents}
                  >
                    <MenuItem sx={{color:'black'}} value='1'>1</MenuItem>
                    <MenuItem sx={{color:'black'}} value='2'>2</MenuItem>
                    <MenuItem sx={{color:'black'}} value='3'>3</MenuItem>
                    <MenuItem sx={{color:'black'}} value='4'>4</MenuItem>
                    <MenuItem sx={{color:'black'}} value='5'>5+</MenuItem>
                
                  </Select>
                </FormControl>
            </Grid>
          </Grid>






          <Grid container sx={{display:'flex', justifyContent:'space-between'}}>
            {/* EMAIL */}
            <Grid item sm={6} xs={12} sx={{py:1}}>
              <InputLabel >Email</InputLabel>
              <FormControl sx={{width:'60%'}}>
                <TextField variant='outlined' required sx={{backgroundColor:'white', borderRadius:'4px'}}></TextField>
              </FormControl>
            </Grid>
            {/* CLASS */}
            <Grid item sm={6} xs={12} sx={{alignItems:'flex-start', py:1}}>
              <InputLabel  >Choose a Class</InputLabel>
              <FormControl sx={{backgroundColor:'white', width: '60%'}}>
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
              </FormControl>

            </Grid>
          </Grid>




          <Grid container sx={{display:'flex', justifyContent:'space-between', py: 1}}>

            {/* DATE */}
            <Grid item sm={6} xs={12} sx={{py:1}}>
                <InputLabel  >Date and Time</InputLabel>
                <FormControl sx={{backgroundColor: "white", fontSize:'18px'}}>
                  <Picker onChange={onChange} value={value} required  />
                </FormControl>

              </Grid>
           

            {/* LOCATION */}
            <Grid item sm={6} xs={12} sx={{py:1}}>
                <InputLabel >Select a Location</InputLabel>
                <FormControl sx={{backgroundColor:'white', width: '60%'}}>
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
                  </FormControl>
              </Grid>
            </Grid>




          <Grid item sm={6} xs={12}>

            {/* NOTE */}
            <Grid item>
            <InputLabel>Note</InputLabel>
              <TextareaAutosize style={{width: 300}} sx={{backgroundColor: 'white', borderRadius:'4px'}} placeholder="Want to book Intro to fire-spinning? Need to add details or specifics? Add a message here"
              onInput={(e) => handleMessageChange(e)} value={messageText} />
            </Grid>

            <Grid container sx={{pt: 2, display:'flex', alignItems:'center', width:'auto', justifyContent:'space-between'}}>
              <Grid item>
                <Button sx={{border:'2px solid rgb(4, 215, 159)', px:'16px', py: '2px'}} type='reset'>Cancel</Button>
              </Grid>
              <Grid item>
                <ThemeButton text='Book a Class' type='submit'/>
              </Grid>
            </Grid>
          </Grid>


        
        </Grid>


      </Card>
      </form>
  

    </Container>
    );
}

export default Booking;




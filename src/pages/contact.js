import React, {useState} from 'react';
import {Box, Grid, Typography, FormControl, TextField, Container, Link, Select, InputLabel, MenuItem, FormLabel, TextareaAutosize,   } from '@mui/material';
import ThemeButton from '../components/ThemeButton'

const light = {color:'white', background:'white'}

const Contact = () => {
  const [lesson, setLesson] = useState('');

  const handleChange = (event) => {
    console.log(event.target.value)
    setLesson(event.target.value);
  };

  
  return (
    <Container>

        <Grid container item sx={{p:0,m:0,color: 'white', display:'flex', justifyContent: 'center'}}>
          <Typography variant='h4'>
          Contact Form
          </Typography>
        </Grid>
      <form>
      <Grid container  direction='column' sx={{display:'flex'}}>
        <Grid item>
          <InputLabel sx={{color:'white'}}  variant='h1'>Name</InputLabel>
          <FormControl sx={{width:'100%'}}>
            <TextField focused sx={{width:'50%', backgroundColor: 'white'}} placeholder='Name'  ></TextField>
          </FormControl>
        </Grid>
        <Grid item sx={{py: 2}}>
          <InputLabel sx={{color:'white'}}>Email</InputLabel>
          <FormControl sx={{width:'100%'}}>
            <TextField sx={{width:'50%', backgroundColor: 'white'}} placeholder='Email'></TextField>
          </FormControl>
        </Grid>
        <Grid item sx={{pb: 2}}>
          <InputLabel sx={{color:'white'}}>Message</InputLabel>
          <FormControl sx={{width: '50%'}}>
            <TextareaAutosize sx={{backgroundColor: 'white'}} placeholder="If you have any further questions about props, or which class might be right for you, please don't hesitate to ask."/>
          </FormControl>
        </Grid>

        <Grid item>
          <ThemeButton text='Send'  type='submit'></ThemeButton>
        </Grid>

      </Grid>
      </form>
  

    </Container>
    );
}

export default Contact;




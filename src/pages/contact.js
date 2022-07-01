import React, { useState } from 'react';
import {Button, Grid, Typography, FormControl, TextField, Container, InputLabel, TextareaAutosize, FormGroup } from '@mui/material';
import ThemeButton from '../components/ThemeButton'
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';


const SERVICE_ID = 'service_z3uz9wo'
const TEMPLATE_ID = 'template_fk9dob6'

const Contact = () => {

  const [nameText, setNameText] = useState('')
  const [emailText, setEmailText] = useState('')
  const [messageText, setMessageText] = useState('')

  const handleNameChange = (event) => {
    setNameText(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmailText(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessageText(event.target.value);
  };

  const { register, handleSubmit} = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, '#contactForm', 'rpxEK_3C9Avbj3iEi')
    .then((response)=>{
      if (response.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.status === 'fail') {
        alert("Message failed to send.")
      }
    })
    resetForm();

  };

  const resetForm = ()=> {
    setNameText('')
    setEmailText('')
    setMessageText('')
  }



  return (
     <>
      <Grid container item sx={{p:0,m:0,color: 'white', display:'flex', justifyContent: 'center'}}>
        <Typography variant='h4'>
        Contact Form
        </Typography>
      </Grid>
      <form id='contactForm'
       onSubmit={handleSubmit(onSubmit)}
      >
        <FormGroup>

        {/* register your input into the hook by invoking the "register" function */}
          <Grid container  direction='column' sx={{display:'flex'}}>
            <Grid item >
              <InputLabel sx={{color:'white'}}>Name</InputLabel>
              <FormControl sx={{width:'100%'}}>
                <TextField focused sx={{borderRadius:'4px', width:'100%', backgroundColor: 'white'}} onInput={(e) => handleNameChange(e)} required placeholder='Name' {...register('name')} value={nameText}></TextField>
              </FormControl>
            </Grid>
            <Grid item sx={{py: 2}}>
              <InputLabel sx={{color:'white'}}>Email</InputLabel>
              <FormControl sx={{width:'100%'}}>
                <TextField sx={{borderRadius:'4px', width:'100%', backgroundColor: 'white'}} onInput={(e) => handleEmailChange(e)} required placeholder='Email' {...register('email')} value={emailText}>
                </TextField>     
              </FormControl>
            </Grid>
            <Grid item sx={{pb: 2}}>
              <InputLabel sx={{color:'white'}}>Message</InputLabel>
              <FormControl sx={{width:'100%'}}>
                <TextareaAutosize minRows={5} required onInput={(e) => handleMessageChange(e)} value={messageText} sx={{backgroundColor: 'white'}} placeholder="If you have any further questions about props, or which class might be right for you, please don't hesitate to ask."  {...register('message')}/>
              </FormControl>
            </Grid>
            <Grid container item sx={{width:'100%', display:'flex', justifyContent:'space-around'}}>
            <Grid item>
              <Button sx={{border:'2px solid rgb(4, 215, 159)', px:'16px', py: '2px', color: 'black', backgroundColor:'#D9EDDF', '&:hover': {backgroundColor:'#A88FFF'} }} 
              onClick={resetForm}
               type='reset'>Cancel</Button>
            </Grid>
            <Grid item>
              <ThemeButton text='Send' type='submit'></ThemeButton>
            </Grid>
            </Grid>

          </Grid>
        </FormGroup>
      </form>
      </>
    );
}

export default Contact;




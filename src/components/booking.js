import React, {useState} from 'react';
import {Button, Card, Grid, FormControl, Typography,TextField, Container, FormGroup, Select, InputLabel, MenuItem, TextareaAutosize  } from '@mui/material';
import ThemeButton from './ThemeButton'
import Picker from 'react-datetime-picker' 
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';


const SERVICE_ID = 'service_lgqkr0u'
const TEMPLATE_ID = 'template_zza26bt'

const Booking = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [lesson, setLesson] = useState('');
  const [numStudents, setNumStudents] = useState('');
  const [location, setLocation] = useState('');
  const [value, onChange] = useState(new Date());
  const [messageText, setMessageText] = useState('')

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
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


  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    data.dateTime = value
    var templateParams = {
      name: data.name,
      email: data.email,
      numStudents: data.numStudents,
      lesson: data.lesson,
      dateTime: data.dateTime,
      location: data.location,
      note: data.note,
      from_email: data.email
    };
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, 'rpxEK_3C9Avbj3iEi')
    .then((response)=>{
      console.log('response', response)
      if (response.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.status === 'fail') {
        console.log('failure')
        alert("Message failed to send.")
      }
    })
 
    resetForm();

  };

  const resetForm = ()=> {
    setName('')
    setEmail('')
    setLesson('')
    onChange(new Date())
    setNumStudents('')
    setLocation('')
    setMessageText('')
    setLocation('')
  }


  
  return (
    <Container>

      <Grid container item sx={{color: 'white', display:'flex', justifyContent: 'center'}}>
        <Typography variant='h2'>
        Book a Class
        </Typography>
      </Grid>


        
      <form id='bookingForm' onSubmit={handleSubmit(onSubmit)} >
        <FormGroup>
          <Card sx={{p: 2,backgroundColor:'rgb(233, 248, 244)'}}>
            <Grid container sx={{display:'flex'}}>
          

            <Grid container sx={{display:'flex', justifyContent:'space-between'}}>
                {/* NAME */}
                <Grid item sm={6} xs={12}>
                  <InputLabel>Name</InputLabel>
                  <FormControl sx={{width:'60%'}}>
                    <TextField {...register('name')} value={name}  onInput={(e) => handleNameChange(e)} variant='outlined' sx={{borderRadius:'4px', backgroundColor:'white'}}/>
                  </FormControl>

                </Grid>


                {/* # STUDENTS */}
                <Grid item sm={6} xs={12} sx={{alignItems:'flex-start'}}>

                  <InputLabel># of Students</InputLabel>
                    <FormControl sx={{backgroundColor:'white', width: '60%'}}>
                      <Select
                        {...register('numStudents')}
                        variant='outlined'
                        value={numStudents}
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
                    <TextField {...register('email')} value={email}  onInput={(e) => handleEmailChange(e)} variant='outlined' required sx={{backgroundColor:'white', borderRadius:'4px'}}></TextField>
                  </FormControl>
                </Grid>
                {/* CLASS */}
                <Grid item sm={6} xs={12} sx={{alignItems:'flex-start', py:1}}>
                  <InputLabel  >Choose a Class</InputLabel>
                  <FormControl sx={{backgroundColor:'white', width: '60%'}}>
                    <Select
                    {...register('lesson')}
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
                    <InputLabel>Request a Date and Time</InputLabel>
                    <FormControl sx={{backgroundColor: "white", fontSize:'18px'}}>
                      <Picker {...register('dateTime')} onChange={onChange} value={value} required  />
                    </FormControl>

                  </Grid>
              

                {/* LOCATION */}
                <Grid item sm={6} xs={12} sx={{py:1}}>
                    <InputLabel >Select a Location</InputLabel>
                    <FormControl sx={{backgroundColor:'white', width: '60%'}}>
                      <Select
                      {...register('location')}
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

              <Grid item xs={12}>

                {/* NOTE */}
                <Grid item>
                <InputLabel>Note</InputLabel>
                  <TextareaAutosize {...register('note')} style={{width: 300}} sx={{backgroundColor: 'white', borderRadius:'4px'}} placeholder="Want to book Intro to fire-spinning? Need to add details or specifics? Add a message here"
                  onInput={(e) => handleMessageChange(e)} value={messageText} />
                </Grid>

                <Grid container sx={{pt: 2, display:'flex', alignItems:'center', width:'auto', justifyContent:'space-around'}}>
                  <Grid item>
                    <Button sx={{border:'2px solid rgb(4, 215, 159)', px:'16px', py: '2px'}}  onClick={resetForm} type='reset'>Cancel</Button>
                  </Grid>
                  <Grid item>
                    <ThemeButton text='Book a Class' type='submit'/>
                  </Grid>
                </Grid>
              </Grid>


            
            </Grid>
          </Card>
        </FormGroup>
      </form>
  

    </Container>
    );
}

export default Booking;




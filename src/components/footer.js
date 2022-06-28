import * as React from 'react';
import {Box, Link, Container, Grid,Typography, Stack } from '@mui/material';
import ThemeButton from '../components/ThemeButton'


function Footer() {

return(
  <footer>
    <Box p={{xs:3}} py={{xs:5}} bgcolor='black' color='white'>
      <Container maxWidth='lg'>
        <Grid container>


          <Grid container sx={{display:'flex', alignContent:'flex-start', justifyContent:'center', py: 2}}  item xs={12} sm={4}>

            <Grid container  item  sx={{display:'flex', justifyContent:'center', mb: 1 }}>
              <Grid item >
                <Typography sx={{color:'white', mb: 0, pb: 0, height:'fit-content'}} variant='h5'>
                  Contact
                </Typography>
              </Grid> 
            </Grid> 

              <Grid item>
                <Stack sx={{color:'white', ml:3}} spacing={1}>
                  <li>Phone: 415-713-1130</li>
                  <li>Email: kindojoflowarts@gmail.com</li>
                </Stack>
              </Grid> 

          </Grid>


          <Grid container sx={{display:'flex', alignContent:'flex-start', justifyContent:'center', py: 2}}  item xs={12} sm={4}>
          
            <Grid container item sx={{display:'flex', justifyContent:'center', mb: 1  }}>
              <Grid item >
                <Typography sx={{color:'white', mb: 1}} variant='h5'>
                  Follow
                </Typography>
              </Grid> 
            </Grid>   
            <Grid item>
              <Stack direction='row' spacing={5}>
                <Link href="https://www.instagram.com/acrofirecircus/?hl=en" rel='noreferrer' target="_blank"> <img style={{maxWidth:'40px'}} src={require("../images/Social Media Icons/iconfinder_2018_social_media_popular_app_logo_instagram_3225191.png")} alt="instagram logo"/>
                </Link>
          
                <Link href="https://www.facebook.com/kindojoflow" rel='noreferrer' target="_blank"> <img style={{maxWidth:'40px'}} src={require("../images/Social Media Icons/iconfinder_2018_social_media_popular_app_logo_facebook_3225194.png")} alt="facebook logo"/>
                </Link>
              </Stack>
            </Grid>
          </Grid>


          <Grid container sx={{display:'flex', alignContent:'center', justifyContent:'center', py: 2}}  item xs={12} sm={4}>

            <Grid container  item  sx={{display:'flex', justifyContent:'center' }}>
              <Grid item >
                <Typography sx={{color:'white', mb:1 }} variant='h5'>
                  Donate to the Flow Arts
                </Typography>
              </Grid>
            </Grid>

            
            
            <Grid container  item  sx={{display:'flex', justifyContent:'center' }}>
              <Grid item>
                <Typography center fontSize='12px' sx={{ml: 2,mb:2,}} color='white'>
                Your donation will be used to purchase practice props of varying sizes 
                to allow people of all ages to participate.
                </Typography>
              </Grid>
            </Grid>

            <ThemeButton  link='https://www.patreon.com/flowartsdojo' rel='noreferrer' text='Become a Patron' target="_blank" size="small" />
        


          </Grid>


          
        </Grid>
      </Container>
    </Box>
  </footer>
)

}

export default Footer;
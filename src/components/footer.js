import * as React from 'react';
import {Box, Link, Container, Grid,Typography, Button, Stack } from '@mui/material';


function Footer() {

return(
  <footer>
    <Box sx={{width: '100%', marginLeft: -2}} px={{xs:3}} py={{xs:5}} bgcolor='black' color='white'>
      <Container maxWidth='lg'>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
          <Typography sx={{color:'white', mb: 1}} component='h5'>
            Contact
          </Typography>
            <Stack sx={{color:'white'}} spacing={1}>
              <item>Phone: 415-713-1130</item>
              <item>Email: <a href=''>kindojoflowarts@gmail.com</a></item>
            </Stack>
          </Grid>


          <Grid item xs={12} sm={4}>
          <Typography sx={{color:'white', mb: 1}} component='h5'>
            Follow
          </Typography>
          <Stack spacing={2}>
            <Link>
            <a href="https://www.instagram.com/acrofirecircus/?hl=en" target="_blank"> <img src="images/Social Media Icons/iconfinder_2018_social_media_popular_app_logo_instagram_3225191.png" alt="instagram logo"/></a>
            </Link>
      
            <Link>
            <a href="https://www.facebook.com/kindojoflow" target="_blank"> <img src="images/Social Media Icons/iconfinder_2018_social_media_popular_app_logo_facebook_3225194.png" alt="facebook logo"/> </a>
            </Link>
        </Stack>
          </Grid>


          <Grid item xs={12} sm={4}>
            <Typography sx={{color:'white', mb:1 }} component='h4'>
              Donate to the Flow Arts
            </Typography>
            <Typography paragraph color='white'>
              Your donation will be used to purchase practice props of varying sizes 
              to allow people of all ages to participate.
            </Typography>
            <Button href='https://www.patreon.com/flowartsdojo' rel='noreferrer' target="_blank" size="small">
              Become a Patron
            </Button>
          </Grid>


          
        </Grid>
      </Container>
    </Box>
  </footer>
)

}

export default Footer;
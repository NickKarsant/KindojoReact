import * as React from 'react';
import {Box, Link, Container, Grid,Typography, Button, Stack } from '@mui/material';



function Footer() {

return(
  <footer>
    <Box p={{xs:3}} py={{xs:5}} bgcolor='black' color='white'>
      <Container maxWidth='lg'>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
          <Typography sx={{color:'white', mb: 1}} component='h5'>
            Contact
          </Typography>
            <Stack sx={{color:'white'}} spacing={1}>
              <li>Phone: 415-713-1130</li>
              <li>Email: kindojoflowarts@gmail.com</li>
            </Stack>
          </Grid>


          <Grid item xs={12} sm={4}>
          <Typography sx={{color:'white', mb: 1}} component='h5'>
            Follow
          </Typography>
          <Stack direction='row' spacing={2}>
            <Link href="https://www.instagram.com/acrofirecircus/?hl=en" rel='noreferrer' target="_blank"> <img style={{maxWidth:'40px'}} src={require("../images/Social Media Icons/iconfinder_2018_social_media_popular_app_logo_instagram_3225191.png")} alt="instagram logo"/>
            </Link>
      
            <Link href="https://www.facebook.com/kindojoflow" rel='noreferrer' target="_blank"> <img style={{maxWidth:'40px'}} src={require("../images/Social Media Icons/iconfinder_2018_social_media_popular_app_logo_facebook_3225194.png")} alt="facebook logo"/>
            </Link>
        </Stack>
          </Grid>


          <Grid item xs={12} sm={4}>
            <Typography sx={{color:'white', mb:1 }} component='h4'>
              Donate to the Flow Arts
            </Typography>
            <Typography fontSize='12px' color='white'>
              Your donation will be used to purchase practice props of varying sizes 
              to allow people of all ages to participate.
            </Typography>
            <Button sx={{backgroundColor:'rgb(4, 215, 159)', p: 1, mt: 2, color:'black'}} href='https://www.patreon.com/flowartsdojo' rel='noreferrer' target="_blank" size="small">
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
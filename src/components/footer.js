import React from 'react';
import {Box, Button, Grid, Typography} from '@mui/material';

function Footer() {
  return (
    <Grid container sx={{backgroundColor: 'red', height: '100px', display: 'flex' }}>
    
      <Grid sx={{backgroundColor: 'green', width: 1/3}}>
      <div class="hpcontact">
				<h4>Contact</h4>
				<li>Phone: 415-713-1130</li>
				<li>Email: <a href="mailto:kindojoflowarts@gmail.com?subject=Booking">kindojoflowarts@gmail.com</a></li>
			</div>
      </Grid>    
      <Grid sx={{backgroundColor: 'blue', width: 1/3}}>

	
	
      </Grid>    
      <Grid sx={{backgroundColor: 'yellow', width: 1/3}}>
        
			<div class="hpdonate2">
				<h4>Donate to the Flow Arts</h4>
				<p> Your donation will be used to purchase practice props of varying sizes 
					to allow people of all ages to participate.</p>
				<button class="patreon" type="button" onclick="window.location.href='https://www.patreon.com/flowartsdojo'" target="_blank">Become a Patron</button>
			</div>
      </Grid>    
    </Grid>
  );
}

export default Footer;

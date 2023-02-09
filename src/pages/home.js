import * as React from 'react';
import {Box } from '@mui/material';
import HeroCard from '../components/HeroCard'
import Mission from '../components/Mission'



const Home = () => {
return (
<React.Fragment >
  <HeroCard />
  <Box sx={{ backgroundColor:'rgb(233, 248, 244)',}}>
    <Mission />
  </Box>
</React.Fragment>
  );
}

export default Home;




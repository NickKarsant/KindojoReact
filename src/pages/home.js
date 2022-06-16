import * as React from 'react';
import {Box } from '@mui/material';
import HeroCard from '../components/HeroCard'
import Mission from '../components/Mission'



const Home = () => {
return (
<>
  {/* <HeroCard /> */}
  <Box sx={{ backgroundColor:'rgb(233, 248, 244)',}}>
    <Mission />
  </Box>
</>
  );
}

export default Home;




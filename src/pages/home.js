import * as React from 'react';
import {Box } from '@mui/material';
import HeroCard from '../components/HeroCard'
import Mission from '../components/Mission'



function Home() {
return (
<>
  <HeroCard />
  <Box sx={{mx: -1, backgroundColor:'rgb(4, 215, 159, 0.1)',}}>
    <Mission />
  </Box>
</>
  );
}

export default Home;




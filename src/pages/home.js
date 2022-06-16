import * as React from 'react';
import {Box } from '@mui/material';
import HeroCard from '../components/HeroCard'
import Mission from '../components/Mission'



function Home() {
return (
<>
  <Box sx={{p:15, pb: 5, mx: -1,backgroundColor: 'black', mb: 0}}>
    <HeroCard />
  </Box>
  <Box sx={{mx: -1, backgroundColor:'rgb(4, 215, 159, 0.1)',}}>
    <Mission />
  </Box>
</>
  );
}

export default Home;




import React, {useState} from 'react';
import Nav from './components/nav'
import Home from './pages/home'
import Classes from './pages/classes'
import About from './pages/about'
import Footer from './components/footer'
import Route from './components/Route'
import {Box } from '@mui/material';




function App() {
  const [home, setHome] = useState(true)
  const [classes, setClasses] = useState(false)
  const [about, setAbout] = useState(false)
  const [contact, setContact] = useState(false)
  const [booking, setBooking] = useState(false)


  return (<>

    <Nav/>
    <Box sx={{height: 'auto', width:'auto', py: 6, backgroundColor: '#212121'}}>


    <Route path='/'>
      <Home/>
    </Route>
    
    <Route path='/classes'>
      <Classes />
    </Route>
    <Route path='/about'>
      <About />
    </Route>

</Box>
    <Footer/>
  </>
  );
}

export default App;

import React from 'react';
import Nav from './components/nav'
import Home from './pages/home'
import Classes from './pages/classes'
import Booking from './components/booking'
import About from './pages/about'
import Contact from './pages/contact'
import Footer from './components/footer'
import Route from './components/Route'
import { Container, Grid } from '@mui/material';




function App() {

  return (<>


    <Nav/>

        <Route path='/'>

       
          <Home/>
    
        </Route>

        
      <Container sx={{py:6, backgroundColor: '#212121'}}>
        <Route path='/classes'>
          <Classes />
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/booking'>
          <Booking />
        </Route>
      </Container>
  

        <Route path='/contact'>
      <Container sx={{pt:9, pb: 18, backgroundColor: '#212121'}}>
          <Contact />
      </Container>
        </Route> 

    <Footer/>
  </>
  );
}

export default App;

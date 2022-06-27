import React, {useState} from 'react';
import Nav from './components/nav'
import Home from './pages/home'
import Classes from './pages/classes'
import Booking from './components/booking'
import About from './pages/about'
import Contact from './pages/contact'
import Footer from './components/footer'
import Route from './components/Route'
import { Container } from '@mui/material';




function App() {
  // const [home, setHome] = useState(true)
  // const [classes, setClasses] = useState(false)
  // const [about, setAbout] = useState(false)
  // const [contact, setContact] = useState(false)
  // const [booking, setBooking] = useState(false)


  return (<>


    <Nav/>
    <div style={{padding: '25px 0 50px 0',backgroundColor: '#212121'}}>
      <Route path='/'>
        <Home/>
      </Route>
      
      <Route path='/classes'>
        <Classes />
      </Route>

      <Route path='/about'>
        <About />
      </Route>
 
      <Route path='/contact'>
        <Contact />
      </Route> 

      <Route path='/booking'>
        <Booking />
      </Route>

      </div>
    <Footer/>
  </>
  );
}

export default App;

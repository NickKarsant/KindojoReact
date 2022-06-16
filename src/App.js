import React, {useState} from 'react';
import Nav from './components/nav'
import Home from './pages/home'
import Classes from './pages/classes'
import Footer from './components/footer'
import Route from './components/Route'



function App() {
  const [home, setHome] = useState(true)
  const [classes, setClasses] = useState(false)
  const [about, setAbout] = useState(false)
  const [contact, setContact] = useState(false)
  const [booking, setBooking] = useState(false)


  return (<>

    <Nav/>

    <Route path='/'>
      <Home/>
    </Route>
    
    <Route path='/classes'>
      <Classes />
    </Route>

    <Footer/>
  </>
  );
}

export default App;

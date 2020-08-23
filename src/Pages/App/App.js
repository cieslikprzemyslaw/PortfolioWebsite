import React from 'react';

import Header from '../Header/Header';
import NavBar from '../../Components/navigation/NavBar';
import Technology from '../Technology/Technology';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';


function App() {
  return (
    <>
    <div className="App">
      <Header />
      <Technology />
      <Projects />
      <About />
      <Contacts />
      <footer></footer>
    </div>
    <NavBar />
    </>
  );
}

export default App;

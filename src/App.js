import React from 'react';
import About from './Components/About';
import Agent from './Components/Agent';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Howitwork from './Components/Howitwork';
import Properties from './Components/Properties';
import './index.css';



function App() {
  return (
    <div className='App'>
      <Header />
      <Howitwork />
      <About />
      <Agent />
      <Properties />
      <Contact />
      
    </div>
  );
}

export default App;


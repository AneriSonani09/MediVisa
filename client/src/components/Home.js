import React from 'react'
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Appointment from './Appointment';
import Footer from './Footer';
import Rules from './Rules';

function Home() {
  return (
    <div>
       <Hero />
      {/* <About /> */}
      <Rules />
      <Services />
      <Appointment />
      <Footer /> 
    </div>
  );
}

export default Home

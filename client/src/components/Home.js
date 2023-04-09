import React from 'react'
import Hero from './Pages/Hero';
import About from './Pages/About';
import Services from './Services';
import Footer from './Footer';
import Rules from './Rules';

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Rules />
      <Services />
      <Footer /> 
    </div>
  );
}

export default Home

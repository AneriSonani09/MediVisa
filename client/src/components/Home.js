import React from 'react'
import Keyur from './Keyur';
import NavBar from "./NavBar";
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Appointment from './Appointment';
import Search from './Search';
import Footer from './Footer';
import Info from './Info';
import Region from './Region';

function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Appointment />
      {/* <Keyur/> */}
      <Search />
      <Footer />
    </div>
  )
}

export default Home

import Navbar from '../../components/Navbar';
import Destination from '../../components/Destination';
import Trip from '../Trip';
import Hero from '../Hero';
import React from 'react';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <Navbar/>
      <Hero
        cName="hero"
        heroImg="https://getwallpapers.com/wallpaper/full/c/4/5/151005.jpg"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  )
}

export default Home
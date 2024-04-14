import Navbar from '../../components/Navbar';
import Hero from '../Hero';
import React from 'react';
import AboutImg from "../img/1.jpg";
import AboutUs from '../AboutUs';
import Footer from '../Footer';

function About() {
  return (
    <>
      <Navbar/>
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About Us"
        btnClass="hide"
      />
      <AboutUs/>
      <Footer/>
    </>
  )
}

export default About
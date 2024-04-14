import Navbar from '../../components/Navbar';
import Hero from '../Hero';
import React from 'react';
import AboutImg from "../img/5.jpg";
import Footer from '../Footer';
import Trip from '../Trip';

function Service() {
  return (
    <>
      <Navbar/>
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Services"
        btnClass="hide"
      />
      <Trip/>
      <Footer/>
    </>
  )
}

export default Service
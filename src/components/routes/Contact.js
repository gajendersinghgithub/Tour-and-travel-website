import Navbar from '../../components/Navbar';
import Hero from '../Hero';
import React from 'react';
import AboutImg from "../img/2.jpg";
import Footer from '../Footer';
import ContactForm from '../ContactForm';

function Contact() {
  return (
    <>
      <Navbar/>
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact US"
        btnClass="hide"
      />
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default Contact
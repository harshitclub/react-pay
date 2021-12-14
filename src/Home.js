import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Howitwork from './Howitwork';
import AboutUs from './AboutUs';
import Services from './Services';
import ContactUs from './ContactUs';
import Footer from './Footer';

function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Howitwork/>
    <AboutUs/>
    <Services/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default Home;
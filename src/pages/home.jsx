import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Info';
import Features from '../components/Features';

import Footer from '../components/footer';
import '../App.css';

import SupermarketGallery from '../components/gallery/gallery';
import HeroSection from '../components/hero';
import AboutUs from '../components/aboutus';
import FranchiseInfo from '../components/Info';
import FloatingWhatsAppButton from '../components/wspbutton';

function Home() {
  return (
    <div className='app pt-16'> {/* Adjust the value as needed */}      <Header />
    <HeroSection/>
    <AboutUs/>
    <FranchiseInfo/>

      <Features />
      <Footer />
      <FloatingWhatsAppButton/>
    </div>
  );
}

export default Home;
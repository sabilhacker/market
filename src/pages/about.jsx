import React from 'react';
import Header from '../components/Header';

import Footer from '../components/footer';
import '../App.css';


import AboutUs from '../components/aboutus';

function About() {
  return (
    <div className='app pt-16'> {/* Adjust the value as needed */}      <Header />
    <AboutUs/>

      <Footer />
    </div>
  );
}

export default About;
import React from 'react';
import Header from '../components/Header';

import Footer from '../components/footer';
import '../App.css';


import ContactUs from '../components/contactus';

function Contact() {
  return (
    <div className='app pt-36'> {/* Adjust the value as needed */}      <Header />
    <ContactUs/>

      <Footer />
    </div>
  );
}

export default Contact;
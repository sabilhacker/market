import React from 'react';
import Header from '../components/Header';

import Footer from '../components/footer';
import '../App.css';


import ContactUs from '../components/contactus';
import FranchiseDetailsForm from '../components/apply';

function Applay() {
  return (
    <div className='app pt-36'> {/* Adjust the value as needed */}      <Header />
    <FranchiseDetailsForm/>

      <Footer />
    </div>
  );
}

export default Applay;
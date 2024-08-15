import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Features from './components/Features';

import Footer from './components/Footer';
import './App.css';
import ContactUs from './components/contactus';
import FranchiseDetailsForm from './components/apply';
import SupermarketGallery from './components/gallery/gallery';

function App() {
  return (
    <div className='app'>
      <Header />
      <Banner />
      <SupermarketGallery/>
      <FranchiseDetailsForm/>
      <Features />
      <ContactUs/>

      <Footer />
    </div>
  );
}

export default App;
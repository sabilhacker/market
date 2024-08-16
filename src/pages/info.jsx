import React from 'react';
import Header from '../components/Header';

import Footer from '../components/footer';
import '../App.css';


import FranchiseInfo from '../components/Info';

function Info() {
  return (
    <div className='app pt-36'> {/* Adjust the value as needed */}      <Header />
    <FranchiseInfo/>

      <Footer />
    </div>
  );
}

export default Info;
import React from 'react';

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Applay from './pages/applay';
import Contact from './pages/contact';
import About from './pages/about';
import FranchiseInfo from './components/Info';
import Info from './pages/info';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/apply" element={<Applay />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/info" element={<Info/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

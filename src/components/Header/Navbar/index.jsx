// Navbar
import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

export default function Navbar(props) {
  const { active } = props;
  return (
    <nav className={`navbar ${active ? 'active' : ''}`}>
      <a href="/">Home</a>
      <a href="#gallery">About Us</a>
      <a href="#">  Franchise information</a>
      <a href="#apply">  Applay Franchise </a>
      <a href="#contact-us-section">Contactus</a>
     
    </nav>
  );
}
Navbar.propTypes = {
  active: PropTypes.bool,
}.isRequired;

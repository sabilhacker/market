// Navbar
import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

export default function Navbar(props) {
  const { active } = props;
  return (
    <nav className={`navbar ${active ? 'active' : ''}`}>
      <a href="/">Home</a>
      <a href="/aboutus">About Us</a>
      <a href="/infos">  Franchise information</a>
      <a href="/applay">  Applay Franchise </a>
      <a href="/applay">Contactus</a>
     
    </nav>
  );
}
Navbar.propTypes = {
  active: PropTypes.bool,
}.isRequired;

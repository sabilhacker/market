import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ active }) {
  return (
    <nav
      className={`fixed top-16 left-0 right-0 w-full h-screen flex flex-col items-center justify-center z-40 transition-transform transform lg:transform-none lg:static lg:h-auto lg:flex-row lg:space-x-8 ${
        active ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <a href="/" className="block text-lg mb-4 lg:mb-0 text-white hover:text-orange-500 transition-colors">
        Home
      </a>
      <a href="/about" className="block text-lg mb-4 lg:mb-0 text-white hover:text-orange-500 transition-colors">
        About Us
      </a>
      <a href="/info" className="block text-lg mb-4 lg:mb-0 text-white hover:text-orange-500 transition-colors">
        Franchise Information
      </a>
      <a href="/apply" className="block text-lg mb-4 lg:mb-0 text-white hover:text-orange-500 transition-colors">
        Apply Franchise
      </a>
      <a href="/contact" className="block text-lg text-white hover:text-orange-500 transition-colors">
        Contact Us
      </a>
    </nav>
  );
}

Navbar.propTypes = {
  active: PropTypes.bool,
}.isRequired;

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* First Line: Contact and Social Links */}
      <div className="first-line">
        <div className="contact-info">
          <i className="fas fa-headphones-alt"></i>
          <a href="tel:+918277997319">CALL US (+91) - 8277997319</a>
        </div>
        <div className="social-links">
          <span>FOLLOW US</span>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      {/* Second Line: Footer Columns */}
      <div className="second-line">
        <div className="footer-column">
          <h3>OFFICE ADDRESS</h3>
          <p className="address">
            G-Fresh Mart, B-31, B Block,<br />
            Sector 6, Noida, Uttar Pradesh<br />
            201301
          </p>
          <a href="mailto:connect@gfreshmart.com">connect@gfreshmart.com</a>
        </div>

        <div className="footer-column">
          <h3>INFORMATION</h3>
          <a href="#">Home</a><br />
          <a href="#">About Us</a><br />
          <a href="#">Blog</a><br />
          <a href="#">Contact</a><br />
          <a href="#">Own Franchise</a>
        </div>

        <div className="footer-column">
          <h3>CATEGORIES</h3>
          <a href="#">Grocery & Staples</a><br />
          <a href="#">Personal Care</a><br />
          <a href="#">Stationery</a><br />
          <a href="#">Beverages</a><br />
          <a href="#">Kitchen Items</a><br />
          <a href="#">Household</a><br />
          <a href="#">Dairy Products</a>
        </div>

        <div className="footer-column">
          <h3>CALCULATE YOUR INVESTMENT</h3>
          <img src="investment-calculator.png" alt="Investment Calculator" className="calculator-img"/>
          <button className="calculate-btn">Calculate Now</button>
        </div>
      </div>

      {/* Footer Credits */}
    

      {/* WhatsApp Floating Icon */}
      <a href="https://wa.me/918277997319" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
    </footer>
  );
};

export default Footer;

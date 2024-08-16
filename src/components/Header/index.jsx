import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleMenuButton = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <header className="bg-green-700 text-white fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-6 lg:px-[9%] shadow-lg">
      <a href="/" className="text-2xl font-bold flex items-center">
        <FontAwesomeIcon icon={faShoppingBasket} className="mr-2 text-orange-300" />
        Market
      </a>
      <div className="lg:hidden">
        <button
          type="button"
          id="menu-btn"
          onClick={handleMenuButton}
          className="text-2xl text-white focus:outline-none"
        >
          <FontAwesomeIcon icon={activeMenu ? faTimes : faBars} />
        </button>
      </div>
      <Navbar active={activeMenu} />
    </header>
  );
}

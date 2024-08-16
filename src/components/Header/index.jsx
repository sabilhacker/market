// // import React, { useState } from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import {
// //   faShoppingBasket,
// //   faBars,
// //   faSearch,
// //   faShoppingCart,
// //   faUser,
// // } from '@fortawesome/free-solid-svg-icons';

// // import './Header.css';
// // import Navbar from './Navbar';

// // export default function Header() {
// //   const [activeMenu, setActiveMenu] = useState(false);
// //   const [activeSearch, setActiveSearch] = useState(false);
// //   const [activeShoppingCart, setActiveShoppingCart] = useState(false);
// //   const [activeUserForm, setActiveUserForm] = useState(false);
// //   window.onscroll = () => {
// //     setActiveUserForm(false);
// //     setActiveShoppingCart(false);
// //     setActiveSearch(false);
// //     setActiveMenu(false);
// //   };
// //   const handleMenuButton = () => {
// //     setActiveMenu(!activeMenu);
// //     setActiveSearch(false);
// //     setActiveShoppingCart(false);
// //     setActiveUserForm(false);
// //   };
// //   const handleSearchButton = () => {
// //     setActiveSearch(!activeSearch);
// //     setActiveShoppingCart(false);
// //     setActiveUserForm(false);
// //     setActiveMenu(false);
// //   };
// //   const handleShoppingCartButton = () => {
// //     setActiveShoppingCart(!activeShoppingCart);
// //     setActiveSearch(false);
// //     setActiveUserForm(false);
// //     setActiveMenu(false);
// //   };
// //   const handleUserFormButton = () => {
// //     setActiveUserForm(!activeUserForm);
// //     setActiveSearch(false);
// //     setActiveShoppingCart(false);
// //     setActiveMenu(false);
// //   };
//   import React, { useState } from 'react';
//   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//   import {
//     faShoppingBasket,
//     faBars,
//     faSearch,
//     faShoppingCart,
//     faUser,
//   } from '@fortawesome/free-solid-svg-icons';
  
//   import './Header.css';
//   import Navbar from './Navbar';
  
//   export default function Header() {
//     const [activeMenu, setActiveMenu] = useState(false);
//     const [activeSearch, setActiveSearch] = useState(false);
//     const [activeShoppingCart, setActiveShoppingCart] = useState(false);
//     const [activeUserForm, setActiveUserForm] = useState(false);
//     window.onscroll = () => {
//       setActiveUserForm(false);
//       setActiveShoppingCart(false);
//       setActiveSearch(false);
//       setActiveMenu(false);
//     };
//     const handleMenuButton = () => {
//       setActiveMenu(!activeMenu);
//       setActiveSearch(false);
//       setActiveShoppingCart(false);
//       setActiveUserForm(false);
//     };
//     const handleSearchButton = () => {
//       setActiveSearch(!activeSearch);
//       setActiveShoppingCart(false);
//       setActiveUserForm(false);
//       setActiveMenu(false);
//     };
//     const handleShoppingCartButton = () => {
//       setActiveShoppingCart(!activeShoppingCart);
//       setActiveSearch(false);
//       setActiveUserForm(false);
//       setActiveMenu(false);
//     };
//     const handleUserFormButton = () => {
//       setActiveUserForm(!activeUserForm);
//       setActiveSearch(false);
//       setActiveShoppingCart(false);
//       setActiveMenu(false);
//     };
//     return (
//       <header className="header">
//         <a href="/" className="logo">
//           <i>
//             <FontAwesomeIcon icon={faShoppingBasket} />
//           </i>
//           Market
//         </a>
//         <Navbar active={activeMenu} />
//         <div className="icons">
//           <button type="button" id="menu-btn" onClick={handleMenuButton}>
//             <FontAwesomeIcon className="fa-icon" icon={faBars} />
//           </button>
//           {/* <button type="button" id="search-btn" onClick={handleSearchButton}>
//             <FontAwesomeIcon className="fa-icon" icon={faSearch} />
//           </button> */}
        
//         </div>
     
//       </header>
//     );
//   }
  
















import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faBars } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleMenuButton = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <header className="flex justify-between items-center py-4 px-6 lg:px-[9%] fixed top-0 left-0 right-0 z-50 bg-green-700 text-white shadow-lg">
      <a href="/" className="text-2xl font-bold flex items-center">
        <FontAwesomeIcon icon={faShoppingBasket} className="mr-2 text-orange-300" />
        Market
      </a>
      <div className="lg:hidden">
        <button type="button" id="menu-btn" onClick={handleMenuButton} className="text-2xl">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <Navbar active={activeMenu} />
    </header>
  );
}

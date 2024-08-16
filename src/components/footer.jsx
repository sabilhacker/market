import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#043927] text-white text-base py-8 px-[10%]">
        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-8">
          <a href="#"><i className="fab fa-facebook-f text-[#ffdd00] text-2xl"></i></a>
          <a href="#"><i className="fab fa-instagram text-[#ffdd00] text-2xl"></i></a>
          <a href="#"><i className="fab fa-youtube text-[#ffdd00] text-2xl"></i></a>
          <a href="#"><i className="fab fa-linkedin-in text-[#ffdd00] text-2xl"></i></a>
        </div>

        {/* Second Line: Footer Columns */}
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          <div className="flex-1 text-left">
            <h3 className="mb-4 text-2xl">OFFICE ADDRESS</h3>
            <p className="mb-4 text-lg">
              G-Fresh Mart, B-31, B Block,<br />
              Sector 6, Noida, Uttar Pradesh<br />
              201301
            </p>
            <a href="mailto:connect@gfreshmart.com" className="text-[#ffdd00] hover:underline">connect@gfreshmart.com</a>
          </div>

          <div className="flex-1 text-left">
            <h3 className="mb-4 text-2xl">INFORMATION</h3>
            <a href="#" className="text-[#a6b2c1] hover:text-[#ffdd00] mb-2 block">Home</a>
            <a href="#" className="text-[#a6b2c1] hover:text-[#ffdd00] mb-2 block">About Us</a>
            <a href="#" className="text-[#a6b2c1] hover:text-[#ffdd00] mb-2 block">Blog</a>
            <a href="#" className="text-[#a6b2c1] hover:text-[#ffdd00] mb-2 block">Contact</a>
            <a href="#" className="text-[#a6b2c1] hover:text-[#ffdd00] mb-2 block">Own Franchise</a>
          </div>

          <div className="flex-1 text-left">
            <h3 className="mb-4 text-2xl">CATEGORIES</h3>
            <a href="#" className="text-[#a6b2c1] hover:text-[#ffdd00] mb-2 block">Grocery & Staples</a>
            <a href="#" className="text-[#a6b2c1] hover:text-[#ffdd00] mb-2 block">Personal Care</a>
            <a href="#" className="text-[#a6b2c1] hover:text-[#ffdd00] mb-2 block">Stationery</a>
            <a href="#" className="text-[#a6b2c1] hover:text-[#ffdd00] mb-2 block">Beverages</a>
            <a href="#" className="text-[#a6b2c1] hover:text-[#ffdd00] mb-2 block">Kitchen Items</a>
            <a href="#" className="text-[#a6b2c1] hover:text-[#ffdd00] mb-2 block">Household</a>
            <a href="#" className="text-[#a6b2c1] hover:text-[#ffdd00] mb-2 block">Dairy Products</a>
          </div>
        </div>

        {/* Uncomment the following block if you want to include the WhatsApp button */}
        {/* 
        <a href="https://wa.me/918277997319" className="fixed bottom-6 right-6 bg-[#25d366] text-white rounded-full text-2xl w-12 h-12 flex items-center justify-center shadow-lg">
          <i className="fab fa-whatsapp"></i>
        </a> 
        */}
      </footer>
    </>
  );
};

export default Footer;

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/1234567890" // Replace with your WhatsApp number
      className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default FloatingWhatsAppButton;

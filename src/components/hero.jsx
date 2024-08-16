import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import heroImage from '../assets/imag.jpg'; // Replace with your grocery-themed image

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center p-8 md:p-12 lg:p-16 rounded-xl w-full mx-auto  ">
      <div className="w-full md:w-[50%] lg:w-[45%] text-left mt-8 md:mt-0">
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-gray-800 mb-5 leading-tight font-bold">
          <span className="block">Welcome to</span> 
          <span className="text-green-700 block">Village Fresh Mart</span>
          <span className="block text-gray-600 text-2xl md:text-3xl lg:text-4xl">Your Trusted Supermarket Franchise</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-light">
          We offer fresh, high-quality products with a strong focus on community-oriented service. Our franchise adapts to local needs, ensuring each store reflects the preferences of its community.
        </p>
        <button className="bg-green-600 text-white px-8 py-4 rounded-full text-lg md:text-xl font-semibold shadow-lg hover:bg-green-700 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
          Get Started
        </button>
      </div>
      <div className="w-full md:w-[50%] lg:w-[45%] flex justify-center">
        <img src={heroImage} alt="Food" className="rounded-xl shadow-2xl max-w-xs md:max-w-sm lg:max-w-md h-auto" />
      </div>
    </div>
  );
}

export default HeroSection;

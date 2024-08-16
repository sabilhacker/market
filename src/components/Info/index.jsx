import React from 'react';
import { FaStore, FaMoneyBillWave, FaChartLine } from 'react-icons/fa';

const FranchiseInfo = () => {
  return (
    <section className="py-16 px-5 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-green-800 mb-12">Franchise Information</h2>
      <p className="text-gray-700 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
        Interested in investing in a Village Fresh Mart franchise? Contact us for the most accurate details about our offerings, costs, and requirements.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-[calc(33%-20px)] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <FaStore className="text-green-700 text-5xl mb-6 mx-auto" />
          <h3 className="text-2xl font-bold text-orange-600 mb-4">Mini Franchise</h3>
          <p className="text-lg text-gray-700 mb-2"><strong className="text-green-700">Investment:</strong> 7 lacs to 10 lacs</p>
          <p className="text-lg text-gray-700 mb-2"><strong className="text-green-700">Area in Sqft:</strong> 500 to 700 sqft</p>
          <p className="text-lg text-gray-700"><strong className="text-green-700">ROI:</strong> 18 months</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-[calc(33%-20px)] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <FaMoneyBillWave className="text-green-700 text-5xl mb-6 mx-auto" />
          <h3 className="text-2xl font-bold text-orange-600 mb-4">Super Franchise</h3>
          <p className="text-lg text-gray-700 mb-2"><strong className="text-green-700">Investment:</strong> 10 lacs to 15 lacs</p>
          <p className="text-lg text-gray-700 mb-2"><strong className="text-green-700">Area in Sqft:</strong> 1000 to 1500 sqft</p>
          <p className="text-lg text-gray-700"><strong className="text-green-700">ROI:</strong> 24 months</p>
        </div>
    
      </div>
    </section>
  );
};

export default FranchiseInfo;
